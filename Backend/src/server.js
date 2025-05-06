const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();


const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*'
}));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Database configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const ACCESS_KEY = process.env.ACCESS_KEY;

if (!ACCESS_KEY) {
  console.error('FATAL ERROR: ACCESS_KEY is not defined.');
  process.exit(1);
}

// Authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);

  jwt.verify(token, ACCESS_KEY, (err, user) => {
    if (err) {
      if (err instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ message: 'Token expired' });
      }
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

// * Routes
// User registration with password hashing
app.post('/users', async (req, res) => {
  const { username, email_user, password_user, age_user} = req.body;
  
  if (!username || !email_user || !password_user) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password_user, 14);
    const result = await pool.query(
      'INSERT INTO users (username, email_user, password_user, age_user) VALUES ($1, $2, $3, $4) RETURNING id_user, username, email_user, age_user',
      [username, email_user, hashedPassword, age_user]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') { // Unique violation
      return res.status(409).json({ error: 'User already exists' });
    }
    console.error(err.message);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Protected user routes
app.get('/users', authenticateToken, async (_, res) => {
  try {
    const result = await pool.query(
      'SELECT id_user, username, email_user, age_user FROM users'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.get('/users/:id_user', authenticateToken, async (req, res) => {
  const { id_user } = req.params;
  try {
    const result = await pool.query(
      'SELECT id_user, username, email_user, age_user FROM users WHERE id_user = $1',
      [id_user]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Login Handler
app.post('/login', async (req, res) => {
  const { email_user, password_user, account_enable } = req.body;

  if (account_enable === '0') {
    return res.status(401).json({ error: 'Usuario não existe' });
  }

  console.log ('Login attempt with email:', email_user);
  console.log ('Login attempt with password:', password_user);
  
  if (!email_user || !password_user) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const userResult = await pool.query(
      'SELECT id_user, username, email_user, password_user, age_user FROM users WHERE email_user = $1',
      [email_user]
    );
    
    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const user = userResult.rows[0];
    
    const passwordMatch = await bcrypt.compare(password_user, user.password_user);
    console.log('Password from DB w:', user.password_user);
    console.log('Password match:', passwordMatch);
    
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { 
        id_user: user.id_user,
        email_user: user.email_user,
        username: user.username
      },
      ACCESS_KEY,
      { expiresIn: '1h' } 
    );
    
    const userData = {
      id_user: user.id_user,
      username: user.username,
      email_user: user.email_user,
      age_user: user.age_user,
      account_enable: user.account_enable,
      first_name: user.first_name,
      last_name: user.last_name,
      image: user.image,
      gender_user: user.gemder_user,
      problems_user: user.problems_user,
      professional_confirm: user.profession_confirm,
      professional_type: user.professional_type,
      token: token
    };

    console.log('User data:', userData);
    
    res.json(userData);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Login failed' });
  }
});

// "Delete" user account

app.patch('/disable', authenticateToken, async (req, res) => {
  const { id_user } = req.params;
  
  try {
    const result = await pool.query(
      'UPDATE users SET account_enable = FALSE WHERE id_user = $1 RETURNING *',
      [ id_user ]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ message: 'User account deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to delete user account' });
  }
});

// Edit user handler

app.post('/users/:id_user', authenticateToken, async (req, res) => {
  const { id_user } = req.params;
  const { username, email_user, password_user, age_user, first_name, last_name, image, gender_user, problems_user } = req.body;

  if (!username || !email_user || !password_user) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password_user, 14);
    const result = await pool.query(
      'UPDATE users SET username = $1, email_user = $2, password_user = $3, age_user = $4, first_name = $5, last_name = $6, image = $7, gender_user = $8, problems_user = $9 WHERE id_user = $10 RETURNING *',
      [username, email_user, hashedPassword, age_user, first_name, last_name, image, gender_user, problems_user, id_user]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Professional validation route
app.post('/professional_info', authenticateToken, async (req, res) => {
  const { id_user } = req.body; // Ensure id_user is passed in the request body
  const { professional_confirm, cref_number, cref_card_photo, validator } = req.body;

  try {
    const userResult = await pool.query(
      'UPDATE users SET professional_confirm = $1 WHERE id_user = $2 RETURNING *',
      [professional_confirm, id_user]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const professionalResult = await pool.query(
      'INSERT INTO professional_info (id_user, cref_number, cref_card_photo, validator) VALUES ($1, $2, $3, $4) RETURNING *',
      [id_user, cref_number, cref_card_photo, validator]
    );

    res.json({
      user: userResult.rows[0],
      professionalInfo: professionalResult.rows[0],
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to update user or insert professional info' });
  }
});

// Chat handler



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
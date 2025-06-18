/////////////////////////////////////////////////////////////////////////////////////////////////////More actions
//                                          IMPORTAÇÕES                                           //
/////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const multer = require('multer');
const path = require('path');

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                   CONFIGURAÇÕES GERAIS                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////
const app = express();

// Multer (upload memória)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// Segurança
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*'
}));
app.use(express.json());

// Limite de requisições
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // limite por IP
});
app.use(limiter);

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                             CONFIGURAÇÃO DO BANCO DE DADOS                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                             AUTENTICAÇÃO E MIDDLEWARE JWT                                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, ACCESS_KEY, (err, user) => {
    if (err) {
      return res.status(err instanceof jwt.TokenExpiredError ? 401 : 403)
        .json({ message: err instanceof jwt.TokenExpiredError ? 'Token expired' : 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                            CONFIGURAÇÃO DE UPLOAD DE IMAGEM                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './public'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});
const uploadImage = multer({ storage: storage });

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  ROTAS DE USUÁRIOS                                              //
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Cadastro de usuário
app.post('/users', async (req, res) => {
  const { username, email_user, password_user, age_user } = req.body;
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
    if (err.code === '23505') return res.status(409).json({ error: 'User already exists' });
    console.error(err.message);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Listagem de usuários
app.get('/users', authenticateToken, async (_, res) => {
  try {
    const result = await pool.query('SELECT id_user, username, email_user, age_user FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Buscar usuário por ID
app.get('/users/:id_user', authenticateToken, async (req, res) => {
  const { id_user } = req.params;
  try {
    const result = await pool.query(
      'SELECT id_user, username, email_user, age_user FROM users WHERE id_user = $1',
      [id_user]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Atualizar usuário
app.patch('/usersEdit/id_user', authenticateToken, async (req, res) => {
  const { id_user } = req.params;
  const { username, email_user, password_user, age_user, first_name, last_name, image, gender_user, problems_user, avaliability, address } = req.body;


  try {
    const hashedPassword = await bcrypt.hash(password_user, 14);
    const result = await pool.query(
      `UPDATE users SET username=$1, email_user=$2, password_user=$3, age_user=$4,
        first_name=$5, last_name=$6, image=$7, gender_user=$8, problems_user=$9, 
        avaliability=$10, address=$11 WHERE id_user=$12 RETURNING *`,
      [username, email_user, hashedPassword, age_user, first_name, last_name, image, gender_user, problems_user, avaliability, address, id_user]
    );

    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Desativar usuário
app.patch('/disable', authenticateToken, async (req, res) => {
  const { id_user } = req.params;
  try {
    const result = await pool.query('UPDATE users SET account_enable = FALSE WHERE id_user = $1 RETURNING *', [id_user]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User account deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to delete user account' });
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                   AUTENTICAÇÃO / LOGIN                                          //
/////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/login', async (req, res) => {
  const { email_user, password_user, account_enable } = req.body;

  if (account_enable === '0') return res.status(401).json({ error: 'Usuario não existe' });
  if (!email_user || !password_user) return res.status(400).json({ error: 'Email and password are required' });

  try {
    const userResult = await pool.query(
      'SELECT * FROM users WHERE email_user = $1',
      [email_user]
    );

    if (userResult.rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const user = userResult.rows[0];
    const passwordMatch = await bcrypt.compare(password_user, user.password_user);
    if (!passwordMatch) return res.status(401).json({ error: 'Invalid credentials' });


    const token = jwt.sign({
      id_user: user.id_user,
      email_user: user.email_user,
      username: user.username,
    }, ACCESS_KEY, { expiresIn: '1h' });

    const imageUrl = user.image 
  ? `${req.protocol}://${req.get('host')}/public/${user.image}` 
  : "";

    const userData = {
      username: user.username,
      email_user: user.email_user,
      age_user: user.age_user,
      account_enable: user.account_enable,
      first_name: user.first_name,
      last_name: user.last_name,
      image: imageUrl, 
      id: user.id_user,
      gender_user: user.gender_user,
      problems_user: user.problems_user,
      professional_confirm: user.professional_confirm,
      professional_type: user.professional_type,
      comments_user: user.comments_user,
      user_rating: user.user_rating,
      avaliability: user.avaliability,
      address: user.address,
      token: token,
    };
    console.log('User data:', userData);

    res.json(userData);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Login failed' });
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                       ROTAS DE PROFISSIONAIS E VERIFICAÇÃO                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Validação de profissional
app.post('/professional_info', authenticateToken, async (req, res) => {
  const { id_user, professional_confirm, cref_number, cref_card_photo, validator, professional_type } = req.body;

  try {
    const userResult = await pool.query(
      'UPDATE users SET professional_confirm = 1 WHERE id_user = $1 RETURNING *',
      [id_user]
    );

    if (userResult.rows.length === 0) return res.status(404).json({ error: 'User not found' });

    const professionalResult = await pool.query(
      'INSERT INTO professional_info (id_user, cref_number, cref_card_photo, validator) VALUES ($1, $2, $3, $4) RETURNING *',
      [id_user, cref_number, cref_card_photo, validator]
    );

    await pool.query(
      'UPDATE users SET professional_type = $1 WHERE id_user = $2',
      [professional_type, id_user]
    );

    res.json({ user: userResult.rows[0], professionalInfo: professionalResult.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to update user or insert professional info' });
  }
});


//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                      ROTAS DE EXERCÍCIOS                                        //
/////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/exercicios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM exercicios ORDER BY id_exer ASC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send('Erro ao listar exercícios');
    }
});

app.get('/exercicios/:id', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM exercicios WHERE id_exer = $1', [req.params.id]);
        if (result.rows.length === 0) return res.status(404).send('Exercício não encontrado');
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).send('Erro ao buscar exercício');
    }
});
app.post('/exercicios', async (req, res) => {
  const { nome_exer, repeticoes_exer, descricao_exer, categoria_exer } = req.body;
  try {
      const result = await pool.query(
          'INSERT INTO exercicios (nome_exer, repeticoes_exer, descricao_exer, categoria_exer) VALUES ($1, $2, $3, $4) RETURNING *',
          [nome_exer, repeticoes_exer, descricao_exer, categoria_exer]
      );
      res.status(201).json(result.rows[0]);
  } catch (err) {
      res.status(500).send('Erro ao adicionar exercício');
  }
});

app.put('/exercicios/:id', async (req, res) => {
  const { nome_exer, repeticoes_exer, descricao_exer, categoria_exer } = req.body;
  try {
      const result = await pool.query(
          'UPDATE exercicios SET nome_exer = $1, repeticoes_exer = $2, descricao_exer = $3, categoria_exer = $4 WHERE id_exer = $5 RETURNING *',
          [nome_exer, repeticoes_exer, descricao_exer, categoria_exer, req.params.id]
      );
      if (result.rows.length === 0) return res.status(404).send('Exercício não encontrado');
      res.json(result.rows[0]);
  } catch (err) {
      res.status(500).send('Erro ao atualizar exercício');
  }
});

app.delete('/exercicios/:id', async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM exercicios WHERE id_exer = $1 RETURNING *', [req.params.id]);
        if (result.rows.length === 0) return res.status(404).send('Exercício não encontrado');
        res.status(200).send('Exercício deletado');
    } catch (err) {
        res.status(500).send('Erro ao deletar exercício');
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                     UPLOAD DE IMAGENS                                          //
/////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/upload', authenticateToken, uploadImage.single('image'), (req, res) => {
  try {
    if (!req.file || !req.file.filename) {
      return res.status(400).json({ error: 'No file uploaded or invalid file data' });
    }

    const imageUrl = `${req.protocol}://${req.get('host')}/public/${req.file.filename}`;
    res.json({ message: 'Image uploaded successfully', imageUrl });
  } catch (error) {
    console.error('Error during file upload:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                   MIDDLEWARE DE ERRO                                           //
/////////////////////////////////////////////////////////////////////////////////////////////////////

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                        INICIAR SERVIDOR                                        //
/////////////////////////////////////////////////////////////////////////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


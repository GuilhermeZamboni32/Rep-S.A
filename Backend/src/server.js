const express = require('express');
const cors = require('cors');
const nodemon = require('nodemon');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'senai',
    port: 5432,
});
app.use(cors());
app.use(express.json());

// Rota pra criar um usuario
app.post('/users', async (req, res) => {
    const { username, email_user, password_user, age_user } = req.body
    try {
        const result = await pool.query(
            'INSERT INTO users (username, email_user, password_user, age_user) VALUES ($1, $2, $3, $4) RETURNING *',
            [username, email_user, password_user, age_user]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Erro ao cadastrar usuário!' + err.message})
    }
})

// Rota para buscar todos os usuarios
app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message); 
        res.status(500).json({ error: 'Erro ao buscar usuarios' });
    }
});

// Rota para buscar um usuario por ID
app.get('/users/:id_user', async (req, res) => {
    const { id_user } = req.params;
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id_user]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuario' });
    }
});

// Rota para atualizar um usuario
app.put('/users/:id_user', async (req, res) => {
    const { id_user } = req.params;
    const { username, first_name, last_name, age_user, email_user, password_user, image, gender_user, problems_user, professional_confirm, professional_type } = req.body;
    try {
        const result = await pool.query(
            'UPDATE users SET username = $1, first_name = $2, last_name = $3, age_user = $4, email_user = $5, password_user = $6, image = $7, gender_user = $8, problems_user = $9, professional_confirm = $10, professional_type = $11, WHERE id_user = $12 RETURNING *',
            [username, first_name, last_name, age_user, email_user, password_user, image, gender_user, problems_user, professional_confirm, professional_type]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Ususario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar usuario' });
    }
});

// Rota para deletar um usuario
app.delete('/users/:id_user', async (req, res) => {
    const { idfuncionario } = req.params;
    try {
        const result = await pool.query('DELETE FROM users WHERE id_user = $1 RETURNING *', [id_user]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario não encontrado' });
        }
        res.json({ message: 'Usuario deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar usuario' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
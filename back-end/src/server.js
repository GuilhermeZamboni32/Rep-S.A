const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express(); 
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'server', // Nome da sua database
    password: 'senai', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

//Rota para buscar todos os usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuario' });
    }
});
// Rota para adicionar um cliente
app.post('/usuarios', async (req, res) => {
    const { cpf, senha_usuario, nome_completo, data_nascimento,endereco } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO usuarios (cpf, senha_usuario, nome_completo, data_nascimento,endereco) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [cpf, senha_usuario, nome_completo, data_nascimento,endereco]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar cliente' });
    }
});

// Rota para atualizar um usuarios
app.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { cpf, senha_usuario, nome_completo, data_nascimento, endereco } = req.body;
    try {
        const result = await pool.query(
            'UPDATE usuarios SET cpf = $1, senha_usuario = $2, nome_completo = $3, data_nascimento = $4  endereco = $5 WHERE id = $6 RETURNING *',
            [cpf, senha_usuario, nome_completo, data_nascimento, endereco, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar Usuario' });
    }
});

app.get('/usuarios/:cpf', async (req, res) => {
    const { cpf } = req.params;
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE cpf = $1', [cpf]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'usuario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuario' });
    }
  });


// Rota para deletar um cliente
app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'usuario não encontrado' });
        }
        res.json({ message: 'Usuario deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar Usuario' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 5432');
});


/*
// Rota para buscar um usuarios por ID
app.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'usuario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuario' });
    }
});
*/
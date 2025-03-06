const express = require('express');
const cors = require('cors');
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
app.post('/funcionarios', async (req, res) => {
    const { nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario } = req.body
    try {
        const result = await pool.query(
            'INSERT INTO funcionarios (nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario) VALUES ($1, $2, $3, $4) RETURNING *',
            [nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Erro ao cadastrar usuário!' + err.message})
    }
})

// Rota para buscar todos os usuarios
app.get('/funcionarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM funcionarios');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message); 
        res.status(500).json({ error: 'Erro ao buscar funcionarios' });
    }
});

// Rota para buscar um usuario por ID
app.get('/funcionarios/:idfuncionario', async (req, res) => {
    const { idfuncionario } = req.params;
    try {
        const result = await pool.query('SELECT * FROM funcionarios WHERE id = $1', [idfuncionario]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Funcionario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar funcionario' });
    }
});

// Rota para atualizar um usuario
app.put('/funcionarios/:idfuncionario', async (req, res) => {
    const { idfuncionario } = req.params;
    const { nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario } = req.body;
    try {
        const result = await pool.query(
            'UPDATE funcionarios SET nomefuncionario = $1, emailfuncionario = $2, senhafuncionario = $3, cpffuncionario = $4 WHERE idfuncionario = $5 RETURNING *',
            [nomefuncionario, emailfuncionario, senhafuncionario, cpffuncionario, idfuncionario]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Funcionario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar funcionario' });
    }
});

// Rota para deletar um usuario
app.delete('/funcionarios/:idfuncionario', async (req, res) => {
    const { idfuncionario } = req.params;
    try {
        const result = await pool.query('DELETE FROM funcionario WHERE idfuncionario = $1 RETURNING *', [idfuncionario]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Funcionario não encontrado' });
        }
        res.json({ message: 'Funcionario deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar funcionario' });
    }
});
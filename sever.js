const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

// Middleware para ler o corpo das requisições como JSON
app.use(bodyParser.json());

// Servir arquivos estáticos da pasta public (HTML, CSS, JS)
app.use(express.static('public'));

// Rotas de autenticação
app.use('/api/auth', authRoutes);

// Rota para exibir a página de login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// Rota para exibir a página de cadastro
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


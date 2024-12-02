const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para processar dados de formulários
app.use(express.urlencoded({ extended: true }));

// Middleware para ler o corpo das requisições como JSON
app.use(bodyParser.json());

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

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

app.post('/index.html', (req, res) => {
    const {
        nome,
        cpf,
        email,
        senha,
        telefone,
        data,
        numeroResidencia,
        rua,
        bairro,
        cidade,
        estado,
        cep,
        Complemento,
    } = req.body;

    

    console.log("Dados recebidos:", req.body);

    // Lógica para salvar os dados no banco de dados ou processá-los

    // Redirecionar para a página index.html
    res.redirect('/index.html');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


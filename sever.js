const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')

const app = express()
const PORT = 3000

// Middleware para ler as requisições HTTP que vierem do front
app.use(bodyParser.json())

// Rotas (isso aqui é o endereço qye você vai chamar no front, oq vai ser executado)
app.use('./api/auth', authRoutes)

app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)
})

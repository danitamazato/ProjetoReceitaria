const express = require("express") // aqui estou iniciando o express
const router = express.Router() // aqui estou configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid')

const app = express() // aqui estou iniciando o app
const porta = 3333 // aqui estou criando a porta

// aqui estou criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: '1',
        imagem: '1',
        minibio: '1'
    },
    {
        id: '2',
        nome: '2',
        imagem: '2',
        minibio: '2'
    },
    {
        id: '3',
        nome: '3',
        imagem: '3',
        minibio: '3'
    }
]

// GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

// POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.boby.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

// PORTA
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres)) // segunda configuração da rota, onde configurei a tora GET/mulheres
app.use(router.post('/mulheres', criaMulher)) // configurei rota POST/MULHERES
app.listen(porta, mostraPorta) // servidor ouvindo a porta
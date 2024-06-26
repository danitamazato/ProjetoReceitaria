const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: '1',
        imagem: '1',
        minibio: '1'
    },
    {
        nome: '2',
        imagem: '2',
        minibio: '2'
    },
    {
        nome: '3',
        imagem: '3',
        minibio: '3'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
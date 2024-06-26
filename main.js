const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMain(request, response) {
    response.send("Oi, meu amor!")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get("/main", mostraMain))
app.listen(porta, mostraPorta)
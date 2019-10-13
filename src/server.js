const port = 3003

const express = require('express')
const app = express()
const database = require('./database')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(database.getProdutos()) // Converter para Json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(database.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>
{const produto = database.salvarProduto({
nome: req.body.nome,
preco: req.body.preco
})
res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = database.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
})

app.delete('/produto/:id', (req,res, next) => {
    const produto = database.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})
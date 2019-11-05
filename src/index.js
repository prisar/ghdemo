const express = require('express');
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.json()) // middleware

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => res.send('1. pritimay, 2. ram, ...'))

app.post('/users', (req, res) => res.send(JSON.stringify(req.body)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

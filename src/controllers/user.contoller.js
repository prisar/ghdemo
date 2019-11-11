app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => res.send('1. pritimay, 2. ram, ...'))

app.post('/users', (req, res) => res.send(JSON.stringify(req.body)))
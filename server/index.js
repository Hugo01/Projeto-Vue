const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

//Middlewares
app.use(bodyParser.json())
app.use(cors())

const posts = require('./routes/api/posts');
app.use('/api/posts', posts)
app.use('/endpoint', posts)

const port = process.env.port || 5000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

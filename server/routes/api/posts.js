const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();
//GET POSTS
router.get('/', async (req,res) => {
    const posts = await carregarPosts();
    res.send(await posts.find({}).toArray())
})
//Teste
//ADD POSTS no Database
router.post('/', async (req,res) => {
    const posts = await carregarPosts();
    await posts.insertOne({
        texto: req.body.texto,
        com: req.body.com,
        data: new Date()
        
    })
    res.status(201).send()
})

//Deletar Post no DB
router.delete('/:id', async (req,res) => {
    const posts = await carregarPosts();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send()
})
//Conectar com MONGODB
async function carregarPosts() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/vue_project', {
        useNewUrlParser: true
    })
    return client.db('vue_project').collection('local.posts')

}



module.exports = router
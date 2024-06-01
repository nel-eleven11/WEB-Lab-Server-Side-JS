import express from 'express'
import conn from './conn.js';
import { getAllPosts, getPostById, createPost, updatePostById, deletePostById } from './db.js';

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from server')
})

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})

app.get('/posts', async (req, res) => {
    const posts = await getAllPosts()
    res.status(200).json(posts)
})

app.get('/posts/:id', async (req, res) => {
    const post = await getPostById(req.params.id)
    if (post) {
        res.json(post)
    }
    else {
        res.status(404).send('Post not found')
    }
})

app.post('/posts', async (req, res) => {
    const id = await createPost(req.body.nombre, req.body.posicion, req.body.posicion2, req.body.numero, req.body.equipo, req.body.descripcion, req.body.supertecnica)
    const post = await getPostById(id)
    if (post) {
        res.status(200).json(post)
    }
    else {
        res.status(404).send('Post not found')
    }
})

app.put('/posts/:id', async (req, res) => {
    const affectedRows = await updatePostById(req.params.id, req.body.nombre, req.body.posicion, req.body.posicion2, req.body.numero, req.body.equipo, req.body.descripcion, req.body.supertecnica)
    if (affectedRows) {
        const post = await getPostById(req.params.id)
        if (post) {
            res.status(200).json(post)
        }
        else {
            res.status(404).send('Post not found')
        } 
    }
    else {
        res.status(404).send('Post not found/updated')
    }
})

app.delete('/posts/:id', async (req, res) => {
    const affectedRows = await deletePostById(req.params.id)
    if (affectedRows) {
        res.status(204).send('Post deleted')
    }
    else {
        res.status(404).send('Post not found')
    }
})
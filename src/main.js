import express from 'express'
import conn from './conn.js';
import { getAllPosts } from './db.js'

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
    res.json(posts)
})
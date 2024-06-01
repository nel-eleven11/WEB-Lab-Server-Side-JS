import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import {
  getAllPosts, getPostById, deletePostById, updatePostById, addPost,
} from './db.js';

const swaggerDocument = YAML.load('swagger.yaml');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

const app = express();
app.use(express.json());

app.get('/posts', async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get('/posts/:id', async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).send('Post not found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/posts/:id', async (req, res) => {
  try {
    const result = await deletePostById(req.params.id);
    if (result.affectedRows > 0) {
      res.send('Post deleted successfully');
    } else {
      res.status(404).send('Post not found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.put('/posts/:id', async (req, res) => {
  try {
    const result = await updatePostById(req.params.id, req.body);
    if (result.affectedRows > 0) {
      res.send('Post updated successfully');
    } else {
      res.status(404).send('Post not found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.post('/posts', async (req, res) => {
  try {
    const result = await addPost(req.body);
    res.status(201).send(`Post added with ID: ${result.insertId}`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(22434, () => {
  console.log('Server is running on port 22434');
});

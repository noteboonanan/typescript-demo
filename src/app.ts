import express from 'express';
import PostController from './controllers/post.controller';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from TypeScript',
  });
});

app.post('/posts', PostController.createBlogPost);
app.get('/posts', PostController.getBlogPosts);

// Catch unregistered routes
app.all('*', (req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});

export default app;
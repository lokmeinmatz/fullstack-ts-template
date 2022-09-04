import express, { Request, Response } from 'express';
import { GetPostsDTO } from 'shared';
import { calculateThing } from './api';

const app = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  res.json({ greeting: 'Hello world!' });
});

app.get('/posts', (_req: Request, res: Response) => {
  const data: GetPostsDTO = {
    posts: []
  };

  calculateThing().then(r => console.log(r)).catch(_e => {});

  res.json(data);
});

app.listen(port, () => {
  console.log(`🚀 server started at http://localhost:${port}`);
});

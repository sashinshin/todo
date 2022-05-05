import type { Express, Request, Response } from "express";

import express from 'express';
import cors from "cors";

const app: Express = express();
const port = 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Express + TypeScript Server' });
});

const a = "abc"
console.log(a);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
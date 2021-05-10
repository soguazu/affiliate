import express, { Request, Response } from 'express';
import path from 'path';

import app from './config/app';
import env from './environment';

const PORT = env.getPort();

if (!PORT) console.log('PORT not set in env');

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

console.log(__dirname);
app.use('/api/docs', express.static(path.resolve(__dirname, '../docs')));

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
});

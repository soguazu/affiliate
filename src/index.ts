import { Request, Response } from 'express';

import app from './config/app';
import env from './environment';

const PORT = env.getPort();

if (!PORT) console.log('PORT not set in env');

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
});

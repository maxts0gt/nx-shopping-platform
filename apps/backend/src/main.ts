import { Message } from '@project-mez/backend-interfaces';
import * as express from 'express';

const app = express();

const greeting: Message = { message: 'Welcome to backend!' };

app.get('/backend', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/backend');
});
server.on('error', console.error);

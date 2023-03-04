const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const connect = require('./database/connect');

async function bootstrap() {
  //middleware
  app.use(express.json());

  //routes
  app.get('/hello', (req, res) => {
    res.send('task manager');
  });
  app.use('/api/v1/tasks', tasks);

  const port = 3000;
  await connect();

  app.listen(port, console.log(`server is listening on ${port}`));
}

bootstrap();

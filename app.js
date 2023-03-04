const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const connect = require('./database/connect');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

async function bootstrap() {
  //middleware
  app.use(express.json());
  app.use(helmet());
  app.use(compression());
  app.use(cookieParser());
  app.use(morgan());
  app.use(cors());

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

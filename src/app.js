import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { logs, port } from './config';
import { v1 } from './api/routes/v1';

const app = express();

app.use(morgan(logs));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(helmet());

app.use('/v1', v1);

app.listen(port, () => {});

module.exports = app;

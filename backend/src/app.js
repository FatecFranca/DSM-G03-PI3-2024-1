import dotenv from 'dotenv';
dotenv.config();

import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import chalk from 'chalk';
import cors from 'cors';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import clienteRouter from './routes/cliente.js';
import empresaRouter from './routes/empresa.js';
import servicoRouter from './routes/servico.js';
import atendimentoRouter from './routes/atendimento.js';
import carrinhoRouter from './routes/carrinho.js';

const app = express();

import mongoose from 'mongoose';
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(chalk.green('Conectado ao MongoDB Atlas')))
  .catch((error) => console.error(chalk.red('Erro ao conectar ao MongoDB Atlas', error)));

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// Configurar CORS
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cliente', clienteRouter);
app.use('/empresa', empresaRouter);
app.use('/servico', servicoRouter);
app.use('/atendimento', atendimentoRouter);
app.use('/carrinho', carrinhoRouter);

export default app;


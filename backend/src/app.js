import dotenv from 'dotenv'
dotenv.config()

import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const app = express();

import mongoose from 'mongoose'
mongoose.connect(process.env.DATABASE_URL)

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

import clienteRouter from './routes/cliente.js'
app.use('/clientes', clienteRouter)

import empresaRouter from './routes/empresa.js'
app.use('/empresa', empresaRouter)

import servicoRouter from './routes/servico.js'
app.use('/servico', servicoRouter)

import atendimentoRouter from './routes/atendimento.js'
app.use('/atendimento', atendimentoRouter)

export default app;

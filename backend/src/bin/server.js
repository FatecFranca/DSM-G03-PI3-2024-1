import app from "../app.js";
import chalk from "chalk";
import { createServer } from "http";
import dotenv from 'dotenv';

dotenv.config();

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);
const server = createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  let bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges.`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  console.log(chalk.cyan(`Listening on https://dsm-g03-pi3-2024-1-n0e0.onrender.com`));
}

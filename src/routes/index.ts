/**
 * Root Router
 * Redirection to Routers
 */

import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import { LogInfo } from "../utils/logger";

// Server instance
let server = express();

// Router instance
let rootRouter = express.Router();

// Activate for request to http://localhost:8000/api

// GET: http://localhost:8000/api/
rootRouter.get("/", (request, response) => {
  LogInfo("Get: http://localhost:8000/api/");
  // Send Hello World
  response.send("Holis");
});

// Redirection to Routers & Controllers
server.use("/", rootRouter); //http://localhost:8000/api/
server.use("/hello", helloRouter); //http://localhost:8000/api/hello -> HelloRouter
// Add more routes to the app

export default server;

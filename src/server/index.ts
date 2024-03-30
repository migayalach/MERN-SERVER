import express, { Express, Request, Response } from "express";

// Security
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// TODO HTTPS

// *Root Router
import rootRuter from "../routes";

// *Create Express Server
const server: Express = express();

// *Define Server to use "/api" and use rootRouter from "index.ts" in router
// From this point onover: http://localhost:8000/api/...
server.use("/api", rootRuter);

// Static server
server.use(express.static("public"));

// TODO Mongoose Connection

// *Security Config
server.use(morgan("dev"));
server.use(helmet());
server.use(cors());

// *Content Type Config
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));

// *Redirection Config
// http://localhost:8000/ -> http://localhost:8000/api/api/
server.get("/", (request: Request, response: Response) => {
  response.redirect("/api");
});

export default server;

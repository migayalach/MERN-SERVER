import express, { Express, Request, Response } from "express";

// Swagger
import swaggerUi from "swagger-ui-express";

// Security
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// TODO HTTPS

// *Root Router
import rootRuter from "../routes";
import mongoose from "mongoose";

// *Create Express Server
const server: Express = express();

// *Swagger Config and route
server.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
      explorer: true,
    },
  })
);
// *Define Server to use "/api" and use rootRouter from "index.ts" in router
// From this point onover: http://localhost:8000/api/...
server.use("/api", rootRuter);

// Static server
server.use(express.static("public"));

// TODO Mongoose Connection
mongoose.connect("mongodb://localhost:27017/codeverification");

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

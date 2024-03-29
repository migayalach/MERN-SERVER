import express, { Request, Response, Router } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

// Router from express
let helloRouter = express.Router();

// http://localhost:8000/api/hello?name=Miguel/
helloRouter
  .route("/")
  // GET ->
  .get(async (request: Request, response: Response) => {
    // Obtain a Query Param
    let name: any = request?.query?.name;
    LogInfo(`Query Param: ${name}`);
    //   Controller Instance to excute method
    const controller: HelloController = new HelloController();
    // Obtain Response
    const responseData = await controller.getMessage(name);
    //   Send to the Client the response
    return response.send(responseData);
  });

// Export Hello Router
export default helloRouter;

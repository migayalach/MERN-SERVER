import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configuration the .env file
dotenv.config();

// Create Express APP
const app: Express = express();
const PORT: string | number = process.env.PORT || 8000;

// Define the first Route APP
app.get("/", (request: Request, response: Response) => {
  // Send Hello word
  response.send("Holis");
});

// Execute APP and Listen Request to PORT
app.listen(PORT, () => {
  console.log("Express server running at line");
});

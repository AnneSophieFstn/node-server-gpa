import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "../database/database.ts";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

connectToDatabase();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

import express, { Express } from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "../database/database.ts";
import userRoutes from "../routes/user.route.ts";
import establishmentRoutes from "../routes/establishment.route.ts";
import { initModels } from "../models/relation.ts";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/establishments", establishmentRoutes);

initModels(); // relation entre les models

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

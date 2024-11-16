import {
  getAll,
  getById,
  create,
  deleteCar,
  update,
} from "../controllers/car.controller.ts";
import { Router } from "express";

const carRoutes = Router();

carRoutes.get("/", getAll);
carRoutes.get("/:id", getById);
carRoutes.post("/", create);
carRoutes.put("/:id", update);
carRoutes.delete("/:id", deleteCar);

export default carRoutes;

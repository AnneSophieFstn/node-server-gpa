import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  deleteEstablishment,
} from "../controllers/establishment.controller.ts";

const establishmentRoutes = Router();

establishmentRoutes.get("/", getAll);
establishmentRoutes.get("/:id", getById);
establishmentRoutes.post("/", create);
establishmentRoutes.put("/:id", update);
establishmentRoutes.delete("/:id", deleteEstablishment);

export default establishmentRoutes;

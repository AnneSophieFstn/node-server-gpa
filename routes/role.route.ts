import { Router } from "express";
import {
  create,
  deleteRole,
  getAll,
  update,
} from "../controllers/role.controller.ts";

const roleRoutes = Router();

roleRoutes.get("/", getAll);
roleRoutes.post("/", create);
roleRoutes.put("/:id", update);
roleRoutes.delete("/:id", deleteRole);

export default roleRoutes;

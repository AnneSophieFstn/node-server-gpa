import { Router } from "express";
import {
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller.ts";

const userRoutes = Router();

userRoutes.get("/", getAllUser);
userRoutes.get("/:id", getUserById);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;

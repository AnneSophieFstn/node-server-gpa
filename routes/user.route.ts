import { Router } from "express";
import { getAllUser, getUserById } from "../controllers/user.controller.ts";

const userRoutes = Router();

userRoutes.get("/", getAllUser);
userRoutes.get("/:id", getUserById);

export default userRoutes;

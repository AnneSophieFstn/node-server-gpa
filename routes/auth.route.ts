import { Router } from "express";
import { register, login } from "../authentification/auth.ts";

const authRoutes = Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);

export default authRoutes;

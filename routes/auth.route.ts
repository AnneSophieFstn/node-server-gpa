import { Router } from "express";
import { register } from "../authentification/auth.ts";

const authRoutes = Router();

authRoutes.post("/register", register);

export default authRoutes;

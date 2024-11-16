import {
  getAll,
  create,
  update,
  deleteR,
} from "../controllers/reservation.controller.ts";
import { Router } from "express";

const reservationRoute = Router();

reservationRoute.get("/", getAll);
reservationRoute.post("/", create);
reservationRoute.put("/:id", update);
reservationRoute.delete("/:id", deleteR);

export default reservationRoute;

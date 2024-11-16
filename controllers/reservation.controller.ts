import { Request, Response } from "express";
import Reservation from "../models/reservation.model.ts";
import Car from "../models/car.model.ts";
import User from "../models/user.model.ts";

// READ
export const getAll = async (req: Request, res: Response) => {
  try {
    const reservations = await Reservation.findAll({
      attributes: ["start_date", "end_date", "start_hour", "end_hour"],
      include: [
        {
          model: Car,
          attributes: ["registration"],
        },
        {
          model: User,
          attributes: ["firstname", "lastname", "phone"],
        },
      ],
    });
    res.status(200).send(reservations);
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};
// CREATE
export const create = async (req: Request, res: Response) => {
  try {
    const create = await Reservation.create({
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      start_hour: req.body.start_hour,
      end_hour: req.body.end_hour,
      user_id: req.body.user_id,
      car_id: req.body.car_id,
    });

    res.status(200).send("Réservation effectuée avec succés !");
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};
// UPDATE
export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const update = await Reservation.update(
      {
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        start_hour: req.body.start_hour,
        end_hour: req.body.end_hour,
        user_id: req.body.user_id,
        car_id: req.body.car_id,
      },
      {
        where: { id: id },
      }
    );
    res.status(200).send("Reservation mis à jour avec succés !");
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};
// DELETE
export const deleteR = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await Reservation.destroy({
      where: { id: id },
    });
    res.status(200).send("Reservation supprimé avec succés !");
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};

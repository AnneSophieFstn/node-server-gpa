import { Request, Response } from "express";
import Car from "../models/car.model.ts";
import Establishment from "../models/establishment.model.js";

export const getAll = async (req: Request, res: Response) => {
  try {
    const cars = await Car.findAll({
      attributes: [
        "name",
        "brand",
        "registration",
        "fuel",
        "mileage",
        "end_ti",
        "end_insurance",
      ],
      include: [
        {
          model: Establishment,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(cars);
  } catch (error) {
    console.error("ERROR: ", error);
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const getById = await Car.findByPk(id, {
      attributes: [
        "name",
        "brand",
        "registration",
        "fuel",
        "mileage",
        "end_ti",
        "end_insurance",
      ],
      include: [
        {
          model: Establishment,
          attributes: ["name"],
        },
      ],
    });

    if (!getById) {
      return res.status(404).send("Aucune voiture trouvé avec cet ID");
    }

    res.status(200).send(getById);
  } catch (error) {
    console.error(error);
  }
};

export const create = async (req: Request, res: Response) => {
  const {
    name,
    brand,
    registration,
    fuel,
    mileage,
    end_ti,
    end_insurance,
    establishment_id,
  } = req.body;

  try {
    const create = await Car.create({
      name: name,
      brand: brand,
      registration: registration,
      fuel: fuel,
      mileage: mileage,
      end_ti: end_ti,
      end_insurance: end_insurance,
      establishment_id: establishment_id,
    });

    console.log("CREATE DATA: ", create);
  } catch (error) {
    console.error("ERROR: ", error);
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const {
      name,
      brand,
      registration,
      fuel,
      mileage,
      end_ti,
      end_insurance,
      establishment_id,
    } = req.body;

    const update = await Car.update(
      {
        name: name,
        brand: brand,
        registration: registration,
        fuel: fuel,
        mileage: mileage,
        end_ti: end_ti,
        end_insurance: end_insurance,
        establishment_id: establishment_id,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).send("Mise a jout fait");
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteCar = await Car.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send("Ok");
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};

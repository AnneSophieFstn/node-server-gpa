import { Request, Response } from "express";
import Establishment from "../models/establishment.model.ts";

export const create = async (req: Request, res: Response) => {
  try {
    const create = await Establishment.create({
      name: req.body.name,
      address: req.body.address,
    });

    console.log("CREATE ESTAB: ", create);

    res.status(200).json({
      message: "Etablissement ajouté avec succès",
    });
  } catch (error) {
    console.error(error);
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const getAll = await Establishment.findAll();
    console.log("ALL ETAB: ", getAll);

    res.status(200).send(getAll);
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const getById = await Establishment.findByPk(id);

    if (!getById) {
      return res.status(404).send("Aucun etablissement trouvé avec cet ID");
    }

    res.status(200).send(getById);
  } catch (error) {
    console.error(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const update = await Establishment.update(
      {
        name: req.body.name,
        address: req.body.address,
      },
      {
        where: {
          id: id,
        },
      }
    );
    console.log("update: ", update);
    res.status(200).send("Mise a jout fait");
  } catch (error) {
    console.error(error);
  }
};

export const deleteEstablishment = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteEstablishment = await Establishment.destroy({
      where: {
        id: id,
      },
    });
    console.log("deleteEstablishment: ", deleteEstablishment);
    res.status(200).send("Ok");
  } catch (error) {
    console.error(error);
  }
};

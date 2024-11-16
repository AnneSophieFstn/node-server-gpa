import { Request, Response } from "express";
import User from "../models/user.model.ts";
import Establishment from "../models/establishment.model.ts";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "firstname", "lastname", "phone", "email"],
      include: [
        {
          model: Establishment,
          attributes: ["id", "name", "address"],
        },
      ],
    });

    if (!users) {
      return res.status(404).send("Aucun utilisateur trouver!");
    }
    res.status(200).send(users);
  } catch (error) {
    console.log("ERROR: ", error);

    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id, {
      attributes: ["id", "firstname", "lastname", "phone", "email"],
      include: [
        {
          model: Establishment,
          attributes: ["id", "name", "address"],
        },
      ],
    });

    if (user === null) {
      return res.status(404).send("Aucun utilisateur n'existe avec cet ID");
    }

    res.status(200).send(user);
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const update = await User.update(
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
      },
      {
        where: { id: id },
      }
    );
    res.status(200).send("Mise a jout fait");
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteUser = await User.destroy({
      where: { id: id },
    });
    res.status(200).send("Ok");
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};

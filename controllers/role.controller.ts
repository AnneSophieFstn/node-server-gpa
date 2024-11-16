import { Request, Response } from "express";
import Role from "../models/role.model.ts";

// READ ALL
export const getAll = async (req: Request, res: Response) => {
  try {
    const getAll = await Role.findAll({ attributes: ["id", "name"] });
    res.status(200).send(getAll);
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};
// CREATE
export const create = async (req: Request, res: Response) => {
  try {
    const create = await Role.create({
      name: req.body.name,
    });
    res.status(200).send("Role ajouté avec succés !");
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
    const update = await Role.update(
      {
        name: req.body.name,
      },
      { where: { id: id } }
    );
    res.status(200).send("Role mis à jour avec succés !");
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};
// DELETE
export const deleteRole = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteRole = await Role.destroy({
      where: { id: id },
    });
    res.status(200).send("Role supprimé avec succés !");
  } catch (error) {
    res
      .status(500)
      .send("Erreur interne du serveur, veuillez réessayer plus tard...");
  }
};

import { Request, Response } from "express";
import User from "../models/user.model.ts";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  // firstname;
  // lastname;
  // phone;
  // email;
  // password;
  // establishment_id;

  try {
    const saltRounds = 10;

    const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);

    const register = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      email: req.body.email,
      password: hashPassword,
      establishment_id: req.body.establishment_id,
    });

    console.log("REGISTER: ", register);

    res.status(200).send("Votre compte a bien été créée !");
  } catch (error) {
    console.error(error);
  }
};

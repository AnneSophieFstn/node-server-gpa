import { Request, Response } from "express";
import User from "../models/user.model.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import Establishment from "../models/establishment.model.js";
dotenv.config();

const SECRET_TOKEN = process.env.ACCESS_TOKEN_SECRET;
export const register = async (req: Request, res: Response) => {
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

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // GET user by req.body.email
    const user = await User.findOne({
      attributes: ["firstname", "lastname", "phone", "email", "password"],
      include: [
        {
          model: Establishment,
          attributes: ["id", "name", "address"],
        },
      ],
      where: { email: email },
    });

    if (user) {
      const passwordHash = user.dataValues.password;
      //DECRYPT MOT DE PASSE
      const match = await bcrypt.compare(password, passwordHash);

      //SI DECRYPT SAME QUE GET USERBYEMAIL PASSWORD
      if (match) {
        // TOKEN
        const token = await jwt.sign({ user: user }, SECRET_TOKEN, {
          expiresIn: process.env.JWT_EXPIRE,
        });

        // Ajoute le jeton d'authentification dans l'en-tête de la réponse
        res.header("Authorization", "Bearer " + token);
        return res.status(200).json({
          token: token,
          user: user,
          message: "Vous êtes bien connecté",
        });
      } else {
        return res.status(403).json({
          message: "Email ou mot de passe incorrect",
        });
      }
      //SINON MOT DE PASSE INCORRECT
    } else {
      return res.status(403).json({
        message: "Email ou mot de passe incorrect",
      });
    }
  } catch (error) {}
};

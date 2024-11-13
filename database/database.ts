import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

const db = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USERNAME}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: `${process.env.DB_HOST}`,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
  }
);

// Vérifier la connexion a la bdd
export const connectToDatabase = async () => {
  try {
    await db.authenticate();
    console.log("Connexion réussie à la base de données !");
  } catch (error) {
    console.error("Erreur de connexion :", error);
  }
};

export default db;

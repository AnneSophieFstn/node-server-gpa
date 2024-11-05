import dotenv from "dotenv";
dotenv.config();
import pg from "pg";
const { Client } = pg;

const db = new Client({
  user: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
  host: `${process.env.DB_HOST}`,
  port: Number(process.env.DB_PORT),
  database: `${process.env.DB_NAME}`,
});

// Vérifier la connexion a la bdd
export const connectToDatabase = async () => {
  try {
    await db.connect();
    console.log("Connexion réussie à la base de données !");
  } catch (error) {
    console.error("Erreur de connexion :", error);
  }
};

export default db;

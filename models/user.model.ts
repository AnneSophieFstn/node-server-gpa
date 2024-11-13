import db from "../database/database.ts";
import { DataTypes } from "sequelize";
import Establishment from "./establishment.model.ts";

const User = db.define("users", {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  establishment_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Establishment,
      key: "id",
    },
  },
});

export default User;

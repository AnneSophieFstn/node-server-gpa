import db from "../database/database.ts";
import { DataTypes } from "sequelize";
import Establishment from "./establishment.model.js";

const Car = db.define(
  "car",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fuel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mileage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_ti: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_insurance: {
      type: DataTypes.DATEONLY,
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
  },
  {
    tableName: "car",
  }
);

export default Car;

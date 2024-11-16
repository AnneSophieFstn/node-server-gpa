import db from "../database/database.ts";
import { DataTypes } from "sequelize";
import User from "./user.model.ts";
import Car from "./car.model.ts";

const Reservation = db.define(
  "reservation",
  {
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    start_hour: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_hour: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Car,
        key: "id",
      },
    },
  },
  {
    tableName: "reservation",
  }
);

export default Reservation;

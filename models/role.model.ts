import db from "../database/database.ts";
import { DataTypes } from "sequelize";

const Role = db.define(
  "role",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "role",
  }
);

export default Role;

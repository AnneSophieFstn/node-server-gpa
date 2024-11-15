import db from "../database/database.ts";
import { DataTypes } from "sequelize";

const Permission = db.define(
  "permission",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "permission",
  }
);

export default Permission;

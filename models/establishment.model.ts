import db from "../database/database.ts";
import { DataTypes } from "sequelize";

const Establishment = db.define(
  "establishment",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "establishment",
  }
);

export default Establishment;

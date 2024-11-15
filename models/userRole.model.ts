import db from "../database/database.ts";
import { DataTypes } from "sequelize";

const UserRole = db.define(
  "UserRole",
  {
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
  },
  {
    tableName: "user_role",
  }
);

export default UserRole;

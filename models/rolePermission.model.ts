import db from "../database/database.ts";
import { DataTypes } from "sequelize";

const RolePermission = db.define(
  "RolePermission",
  {
    role_id: DataTypes.INTEGER,
    permission_id: DataTypes.INTEGER,
  },
  {
    tableName: "role_permission",
  }
);

export default RolePermission;

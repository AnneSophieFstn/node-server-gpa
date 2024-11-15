import User from "./user.model.ts";
import Establishment from "./establishment.model.ts";
import Role from "./role.model.ts";
import Permission from "./permission.model.ts";
import UserRole from "./userRole.model.ts";
import RolePermission from "./rolePermission.model.ts";

const initModels = () => {
  User.belongsTo(Establishment, { foreignKey: "establishment_id" });
  Establishment.hasMany(User, { foreignKey: "establishment_id" });

  // User -> Roles (Many-to-Many)
  User.belongsToMany(Role, { through: UserRole, foreignKey: "user_id" });
  Role.belongsToMany(User, { through: UserRole, foreignKey: "role_id" });

  // Role -> Permissions (Many-to-Many)
  Role.belongsToMany(Permission, {
    through: RolePermission,
    foreignKey: "role_id",
  });
  Permission.belongsToMany(Role, {
    through: RolePermission,
    foreignKey: "permission_id",
  });
};

export { initModels };

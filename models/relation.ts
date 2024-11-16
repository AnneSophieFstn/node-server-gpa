import User from "./user.model.ts";
import Establishment from "./establishment.model.ts";
import Role from "./role.model.ts";
import Permission from "./permission.model.ts";
import Reservation from "./reservation.model.ts";
import UserRole from "./userRole.model.ts";
import RolePermission from "./rolePermission.model.ts";
import Car from "./car.model.ts";

const initModels = () => {
  User.belongsTo(Establishment, { foreignKey: "establishment_id" });
  Establishment.hasMany(User, { foreignKey: "establishment_id" });

  Car.belongsTo(Establishment, { foreignKey: "establishment_id" });
  Establishment.hasMany(Car, { foreignKey: "establishment_id" });

  // Reservation -> Car (One to One)
  // Car -> Reservation (has Many)
  Reservation.belongsTo(Car, { foreignKey: "car_id" });
  Car.hasMany(Reservation, { foreignKey: "car_id" });

  // Reservation -> User (One to One)
  // User -> Reservation (hasMany)
  Reservation.belongsTo(User, { foreignKey: "user_id" });
  User.hasMany(Reservation, { foreignKey: "user_id" });

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

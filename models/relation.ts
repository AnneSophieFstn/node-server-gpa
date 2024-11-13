import User from "./user.model.ts";
import Establishment from "./establishment.model.ts";

const initModels = () => {
  User.belongsTo(Establishment, { foreignKey: "establishment_id" });
  Establishment.hasMany(User, { foreignKey: "establishment_id" });
};

export { initModels };

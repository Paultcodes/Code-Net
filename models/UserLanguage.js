const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserLanguages extends Model {}

UserLanguages.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = UserLanguages;

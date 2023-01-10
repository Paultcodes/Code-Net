const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserLanguages extends Model {}

UserLanguages.init(
  {},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = UserLanguages;

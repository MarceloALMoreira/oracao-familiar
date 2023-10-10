'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class familia extends Model {
    static associate(models) {
    }
  }
  familia.init({
    nomeFamilia: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'familia',
  });
  return familia;
};
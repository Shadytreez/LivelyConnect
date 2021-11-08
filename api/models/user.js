'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 250],
        notEmpty: true,
      },
      unique: true
    },
    location: { type: DataTypes.STRING },
    linkedln: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here

    // models.User.belongsToMany(models.Event, {through: 'Attending'});
  };

  return User;
};  
'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    user_name: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 250],
        notEmpty: true,
      },
      unique: true
    },
    name: { type: DataTypes.STRING },
    location: { type: DataTypes.STRING },
    linkedln: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    image: {type: DataTypes.STRING},
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
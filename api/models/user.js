'use strict';
const { Model } = require('sequelize');
const bcrypt =  require('bcryptjs')

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
    password: { type: DataTypes.VIRTUAL },
    passwordHash: { type: DataTypes.STRING },
    image: {type: DataTypes.STRING},
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here

    // models.User.belongsToMany(models.Event, {through: 'Attending'});
  };

  //to hash the password and store it into passwordHash before we create new User
  User.beforeSave((user, options) => {
    if(user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });
  return User;
};  
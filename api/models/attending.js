'use strict';
const { Model } = require('sequelize');
// const { sequelize } = require('../../../learn-sequelize/models');

module.exports = (sequelize, DataTypes) => {
    class Attending extends Model {}

    Attending.init({
        user_name: {
            type: DataTypes.STRING,
            // unique: true,
            // // primaryKey: true,
            // validate: {
            //     len: [3, 250],
            //     notEmpty: true,
            // },
        },
        name: {
            type: DataTypes.STRING,
            // validate: {
            //     len: [3, 250],
            //     notEmpty: true,
            // },
        },
        user_linkedIn: {
            type: DataTypes.STRING,
           
        },
        user_image: {
            type: DataTypes.STRING,
           
        },
        event_id: {
            type: DataTypes.STRING,
            // validate: {
            //     notEmpty: true,
            // },
        },
       
    }, { 
        sequelize,
        modelName: 'attending'
     });

    return Attending;
};
// 'use strict';
const { Model } = require('sequelize');
const { sequelize } = require('../../../../learn-sequelize/models');

module.exports = (sequelize, DataTypes) => {
    class Event extends Model {}

    Event.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 250],
                notEmpty: true,
            }
        },
        activityType: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.text,
            validate: {
                len: [3, 250],
                notEmpty: true,
            }
        },
        dateTime: {
            type: DataTypes.dateTime,
            validate: {
                notEmpty: true,
            }
        },
        link: {
            type: DataTypes.STRING,
        }
    })

    return Event;
};
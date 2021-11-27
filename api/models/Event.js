// 'use strict';
const { Model } = require('sequelize');
const { sequelize } = require('../../../learn-sequelize/models');

module.exports = (sequelize, DataTypes) => {
    class Event extends Model {}

    Event.init({
        name: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
            validate: {
                len: [3, 250],
                notEmpty: true,
            },
        },
        activityType: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 250],
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.text,
            validate: {
                len: [3, 250],
                notEmpty: true,
            },
        },
        dateTime: {
            type: DataTypes.dateTime,
            validate: {
                notEmpty: true,
            },
        },
        zoomLink: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 250],
                notEmpty: true,
            },
        },
        bannerImg:{
            type: DataTypes.STRING,
            validate:{
                len: [3, 250],
                notEmpty: true,
            }
        },
        isOpen:{
            type: DataTypes.BOOLEAN,
            validate:{
                len: [3, 250],
                notEmpty: true,
            }
        },
        hostUserName:{
            type: DataTypes.STRING,
            validate:{
                len: [3, 250],
                notEmpty: true,
            }
        }
    }, { 
        sequelize,
        modelName: 'event'
     });

    return Event;
};
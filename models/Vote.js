//import Model class and datatypes methods from sequelize
const { Model, DataTypes } = require('sequelize');
//inport database connection
const sequelize = require('../config/connection');

//create vote model
class Vote extends Model { }

//define table columns and configurations
Vote.init(
    {
        //table columne definitions
        //define id column
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        //define user_id column
        user_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        //define post_id column
        post_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        },
    },
    {   
        //table configuration settings
        //pass in imported sequelize connection to database
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote'
    }
);

//export vote model
module.exports = Vote;
//import Model class and datatypes methods from sequelize
const { Model, DataTypes } = require('sequelize');
//inport database connection
const sequelize = require('../config/connection');

//create comment model
class Comment extends Model { }

//define table columns and configurations
Comment.init(
    {
        //table column definitions
        //define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //define comment_text column
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false, 
            len: [4]
        },
        //define user_id column
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        //define post_id column
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        //table configuration options
        //pass in imported sequelize connection to database.
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
)

//export the comment model
module.exports = Comment;
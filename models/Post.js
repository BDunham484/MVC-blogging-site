//import Model class and datatypes methods from sequelize
const { Model, DataTypes } = require('sequelize');
//inport database connection
const sequelize = require('../config/connection');

//create post model
class Post extends Model {
    static upvote(body, models) {
        return models.Vote.create({
            user_id: body.user_id,
            post_id: body.post_id
        }).then(() => {
            return Post.findOne({
                where: {
                    id: body.post_id
                },
                attributes: [
                    'id',
                    'post_content',
                    'title',
                    'created_at',
                    [
                        sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
                        'vote_count'
                    ]
                ]
            });
        });
    }
}


//define table columns and configurations
Post.init(
    {
        //table column definitions
        //define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //define title column
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //define post_content column
        post_content: {
            type: DataTypes.TEXT
        },
        //define user_id column
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
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
        modelName: 'post'
    }
);

//export the Post model
module.exports = Post; 
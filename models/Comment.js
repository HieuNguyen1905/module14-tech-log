const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    comment: {
        type: DataTypes.STRING,
        validate:{
            len:[1,240]
        }
    }
},{
    sequelize
})

module.exports = Comment;
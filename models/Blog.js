const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init({
    status: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1,240]
        }
    }
},{
    sequelize
})

module.exports = Blog;
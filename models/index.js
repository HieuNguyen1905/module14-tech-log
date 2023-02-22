const User = require('./User')
const Blog = require('./Blog')
const Comment = require('./Comment')

User.hasMany(Blog,{onDelete:"CASCADE"});
Blog.belongsTo(User);
//FK: UserId

Blog.hasMany(Comment)
//FK: BlogId

Comment.belongsTo(User)
//FK: UserId

module.exports = {
  User,
  Blog,
  Comment
}
const express = require("express");
const router = express.Router();
const { User, Blog, Comment } = require("../models");

router.get("/", async(req,res) => {
    const blog = await Comment.findAll()
    res.json(blog)
})

router.post("/", async(req,res) => {
    if(!req.session.UserId){
        return res.status(403).json({msg: "Please login to comment"})
    }
    const newBlog = await Comment.create({
        BlogId: req.body.BlogId,
        UserId: req.session.UserId,
        comment: req.body.comment
    });
    res.json(newBlog)
})

router.get("/get/:id", async(req,res) => {
    const blog = await Comment.findAll({where:{BlogId:req.params.id},include:[User]})
    res.json(blog)
})

module.exports = router;
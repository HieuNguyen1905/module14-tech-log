const express = require("express");
const router = express.Router();
const { User, Blog } = require("../models");

router.get("/", async(req,res) => {
    const blog = await Blog.findAll()
    res.json(blog)
})

router.post("/", async(req,res) => {
    if(!req.session.UserId){
        return res.status(403).json({msg: "Please login to post"})
    }
    const newBlog = await Blog.create({
        UserId: req.session.UserId,
        status: req.body.status
    });
    res.json(newBlog)
})

router.delete("/:id", async(req,res) =>{
    if(!req.session.UserId){
        return res.status(403).json({msg: "Please login first"})
    }
    const blog = await Blog.findByPk(req.params.id)
    if(!blog){
        return res.status(404).json({msg:"no such post"})
    } else if(blog.UserId !== req.session.UserId){
        return res.status(403).json({msg:"not your post"})
    }
    const deleteBlog = await Blog.destroy({
        where:{
            id : req.params.id
        }
    })
    res.json(deleteBlog)
})

module.exports = router;
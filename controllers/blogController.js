const express = require("express");
const router = express.Router();
const { User, Blog } = require("../models");

router.get("/", async(req,res) => {
    const blog = await Blog.findAll()
    res.json(blog)
})

router.post("/", async(req,res) => {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog)
})

module.exports = router;
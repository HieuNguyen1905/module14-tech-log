const express = require("express");
const { User,Blog, Comment } = require("../models");
const router = express.Router();

router.get("/", async(req,res) => {
    const blog = await Blog.findAll({include:[User]})
    console.log(blog)
    const hbsData = blog.map(status => status.toJSON())
    console.log("===========")
    console.log(req.session.loggedIn)
    res.render("home",{
        blogs:hbsData,
        isLoggedIn:req.session.loggedIn,
        UserId:req.session.UserId
    });
})

router.get("/seecomment/:id", async(req,res) =>{
    if(!req.session.UserId){
        return res.redirect("/login")
    }
    const blog = await Blog.findByPk(req.params.id,{include:[Comment]})
    const hbsData = blog.toJSON()
    console.log(hbsData)
    res.render("seecomment",{blogs:hbsData,isLoggedIn:req.session.loggedIn,
    UserId:req.session.UserId})
})

router.get("/comment/:id", async(req,res) =>{
    if(!req.session.UserId){
        return res.redirect("/login")
    }
    const blog = await Blog.findByPk(req.params.id)
    const hbsData = blog.toJSON()
    console.log(hbsData)
    res.render("comment",{blogs:hbsData,isLoggedIn:req.session.loggedIn,
    UserId:req.session.UserId})
})

router.get("/edit/:id", async(req,res) =>{
    const blog = await Blog.findByPk(req.params.id)
    const hbsData = blog.toJSON()
    console.log(hbsData)
    res.render("edit",{blog:hbsData,isLoggedIn:req.session.loggedIn,
    UserId:req.session.UserId})
})

router.get("/login",(req,res) => {
    res.render("login",{
        isLoggedIn:req.session.loggedIn,
        UserId:req.session.UserId
    });
})

router.get("/signup",(req,res) => {
    res.render("signup",{
        isLoggedIn:req.session.loggedIn,
        UserId:req.session.UserId
    });
})

router.get("/profile", async (req,res) => {
    if(!req.session.UserId){
        return res.redirect("/login")
    }
    const user = await User.findByPk(req.session.UserId,{include:[Blog]});
    const hbsData = user.toJSON()
    console.log(hbsData)
    res.render("profile",{blogs:hbsData,isLoggedIn:req.session.loggedIn,
        UserId:req.session.UserId});
})

router.get("/logout", (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                res.status(400).json({ msg: "Unable to log out" });
            } else {
                //res.send("log out")
                res.redirect("/");
            }
        });
    } else {
        res.end();
    }
})

module.exports = router;
const express = require("express");
const router = express.Router();
const { User, Blog } = require("../models");
const bcrypt = require("bcrypt");

router.get("/", async(req,res) => {
    const user = await User.findAll()
    res.json(user)
})

router.get("/:id", async(req,res) => {
    const user = await User.findByPk(req.params.id, {include:[Blog]})
    res.json(user)
})

router.post("/signup", async(req,res) => {
    const newUser = await User.create(req.body);
    req.session.UserId = newUser.id;
    req.session.UserEmail = newUser.email;
    req.session.UserName = newUser.name
    res.json(newUser)
})

router.post("/login", async(req,res) =>{
    const user = await User.findOne({
        where:{
            email: req.body.email
        }
    });
    if(!user){
        return res.status(401).json({msg:"Incorrect email or password"})
    } else{
        if(bcrypt.compareSync(req.body.password,user.password)){
            req.session.UserId = user.id;
            req.session.UserEmail = user.email;
            req.session.UserName = user.name
            return res.json(user)
        }else {
            return res.status(401).json({msg:"Incorrect email or password"})
        }
    }
})

module.exports = router;
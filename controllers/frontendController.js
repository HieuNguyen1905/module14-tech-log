const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.send("This is from controller")
    //res.render("main");
})

module.exports = router;
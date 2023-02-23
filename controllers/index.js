const express = require("express");
const router = express.Router();

const frontEndRoutes = require("./frontendController.js");
router.use("/",frontEndRoutes);

const userRoutes = require("./userController");
router.use("/users",userRoutes)

const blogRoutes = require("./blogController");
router.use("/blogs",blogRoutes)

const commentRoutes = require("./commentController");
router.use("/comment",commentRoutes)

module.exports = router;
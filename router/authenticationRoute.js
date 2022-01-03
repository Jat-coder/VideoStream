const express = require("express");
const router = express.Router();
const signup = require("../controllers/signup");
const deleteAllUsers = require("../controllers/deleteAllUsers");
const signin = require("../controllers/signin");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/deleteEverything", deleteAllUsers);

module.exports = router;

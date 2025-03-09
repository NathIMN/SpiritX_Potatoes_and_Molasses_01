const express = require("express");
const router = express.Router();

const { index, signUp, signIn, signOut } = require("../controllers/core");

router.get("/index", index);

router.get("/signup", signUp);

router.get("/signin", signIn);

router.get("/signout", signOut);

module.exports = router;

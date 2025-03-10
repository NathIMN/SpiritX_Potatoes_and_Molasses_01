const express = require("express");
const router = express.Router();

const { index, signUp, signIn, signOut, errorPage } = require("../controllers/core");

router.get("/index", index);

router.get("/signup", signUp);

router.get("/signin", signIn);

router.get("/signout", signOut);

router.get("/error-page", errorPage);

module.exports = router;

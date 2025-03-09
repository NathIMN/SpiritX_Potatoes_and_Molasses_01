const User = require("../models/User");

const index = (req, res) => {
  const msg = req.session.msg || null;
  req.session.msg = null;
  if (!req.session.isLoggedIn) {
    req.session.msg = "Please sign in first to view index";
    res.redirect(302, "/signin");
    return;
  }
  res.render("index", {
    user: req.session.user,
    page: "home",
    msg: msg,
  });
};

const signUp = async (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.msg = "Please sign out first to sign up again";
    res.redirect(302, "/index");
    return;
  }
  res.render("signup", {
    user: req.session.user,
    page: "signup",
  });
};

const signIn = (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.msg = "Please sign out first to sign in again";
    res.redirect(302, "/index");
    return;
  }
  res.render("signin", { user: req.session.user, page: "signin" });
};

const signOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ msg: "failed to sign out" });
      console.log(err);
    } else {
      res.redirect(302, "/signin");
    }
  });
};

module.exports = {
  index,
  signUp,
  signIn,
  signOut,
};

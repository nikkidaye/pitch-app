const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const passport = require("../passport");

router.post("/", (req, res) => {
  console.log("user signup");

  const { email, password } = req.body;
  
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, this email already exists: ${email}`
      });
    } else {
      const newUser = new User({
        email: email,
        password: password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});


router.post(
  "/signin",
  function(req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);
    var userInfo = {
      email: req.user.email
    };
    res.send(userInfo);
  }
);
router.get("/", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  

  router.get("/", (req, res, next) => {
    console.log("===== user!!======");
    console.log(req.user);
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.json({ user: null });
    }
  });

  router.post("/signout", (req, res) => {
    if (req.user) {
      req.signout();
      res.send({ msg: "signing out" });
    } else {
      res.send({ msg: "no user to sign out" });
    }
  });

module.exports = router;

const express = require("express");
const router = express.Router();
// const User = require("../database/models/user");
// const passport = require("../passport");



// router.post(
//   "/signin",
//   function(req, res, next) {
//     console.log("routes/user.js, login, req.body: ");
//     console.log(req.body);
//     next();
//   },
//   passport.authenticate("local"),
//   (req, res) => {
//     console.log("logged in", req.user);
//     var userInfo = {
//       email: req.user.email
//     };
//     res.send(userInfo);
//   }
// );
// router.get("/", (req, res, next) => {
//   console.log("===== user!!======");
//   console.log(req.user);
//
//
//   router.get("/", (req, res, next) => {
//     console.log("===== user!!======");
//     console.log(req.user);
//     if (req.user) {
//       res.json({ user: req.user });
//     } else {
//       res.json({ user: null });
//     }
//   });
//
//   router.post("/signout", (req, res) => {
//     if (req.user) {
//       req.signout();
//       res.send({ msg: "signing out" });
//     } else {
//       res.send({ msg: "no user to sign out" });
//     }
   // });

module.exports = router

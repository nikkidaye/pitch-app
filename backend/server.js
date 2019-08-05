const express = require("express");
const dbConnection = require("./database");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(
    () => {
      console.log("Connected to Mongo");
    },
    err => {
      console.log("Error");
    }
  );

// MIDDLEWARE
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Sessions
app.use(
  session({
    secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false //required
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use("/user", user);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

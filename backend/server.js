const express = require("express");
const bodyParser = require("body-parser");

const user = require("./routes/user");
const port = process.env.Port || 5000;
const session = require('express-session');
const dbConnection = require('./database/index');

const MongoStore = require('connect-mongo')(session)
// const passport = require('./passport');
const app = express()
const mongoose = require('mongoose');

const PORT = 8080;
require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true }).then(
  () => {
    console.log("Connected to Mongo");
  },
  err => {
    console.log("Error")
  }
)

// MIDDLEWARE
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
// app.use(
// 	session({
// 		secret: 'dream-team', //encrypts password
// 		store: new MongoStore({ mongooseConnection: dbConnection }),
// 		resave: false, //required
// 		saveUninitialized: false //required
// 	})
// )

// Passport
// app.use(passport.initialize())
// app.use(passport.session()) // calls the User


// Routes
app.use('/user', user)


// Starting Server
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})

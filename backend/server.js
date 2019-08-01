const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

const user = require("./routes/user");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// app.use(
//   session({
//     secret: "idle-wild",
//     store: new MongoStore({ mongooseConnection: dbConnection }),
//     resave: false,
//     saveUninitialized: false
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

app.use("/user", user);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

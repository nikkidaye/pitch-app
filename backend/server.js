const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
const userRoutes = require("./routes/user");

app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRoutes);

app.listen(PORT, function() {
  console.log(`Server is running on ${PORT}`);
});

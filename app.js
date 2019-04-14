const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");

const nitkRoutes = require("./routes/homepage");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const adminRoutes = require("./routes/admin");

const errorController = require("./controllers/errors");

const app = express();

app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialised: false
  })
);

app.set("views", "views");
app.set("view engine", "ejs");
app.use(nitkRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use("/admin", adminRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://anirudhganwal06:mongodb06@cluster0-z3vog.mongodb.net/nitk-students-data?retryWrites=true"
  )
  .then(result => {
    app.listen(3000, console.log("Server started!"));
  })
  .catch(err => {
    console.log(err);
  });
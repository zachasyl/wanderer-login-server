const express = require("express");
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const session = require("express-session");
app.use(
  session({
    secret: "keyboard cat",
    cookie: {},
  })
);

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://web-dev:wandererproject@cluster0.1zdau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongo DB success");
});

require("./providers/provider-controller")(app);
require("./services/post-service")(app);
require("./users/user-controller")(app);

require("./services/search-service")(app);

require("./services/admin-service")(app);

const userRouter = require("./routes/users");
app.use("/users", userRouter);
app.use(express.static("images"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

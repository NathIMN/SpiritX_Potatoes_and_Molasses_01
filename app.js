require("./db/connect"); //includes dotenv
require("express-async-errors");
const express = require("express");
const session = require("express-session");
const app = express();
const users = require("./routes/users");
//const core = require("./routes/core");
//const notFound = require("./middleware/not-found");
const rateLimiter = require("express-rate-limit");

app.set("view engine", "ejs");

app.use(express.static("./public"));

app.set("trust proxy", 1);

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

//routes
app.use("/api/v1/users", users);

//app.use("/", core);

//app.use(notFound);

const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`));
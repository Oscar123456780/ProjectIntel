const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const exphbs = require("express-handlebars");
const path = require("path");
const methodOverride = require("method-override");

require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("hbs", exphbs.engine({ defaultLayout: "layout.hbs" }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static("src/static"));

// app.get("/", (req, res) => {
//   // res.json({ message: "ye" });
//   res.render("home", { test: "hi" });
// });

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;

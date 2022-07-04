const express = require("express");
const dotenv = require("dotenv");
const app = express();
const morgan = require("morgan");
const path = require("path");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 5500;
//log request
app.use(morgan("tiny"));

// parse request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set view engine
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "views/ejs"));

//load public
app.use("/css", express.static(path.resolve(__dirname, "public/css")));
app.use("/img", express.static(path.resolve(__dirname, "public/img")));
app.use("/js", express.static(path.resolve(__dirname, "public/js")));
// css/style.css

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("server is ready to go on http://localhost:" + PORT);
});

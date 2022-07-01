const express = require("express");
const dotenv = require("dotenv");
const app = express();
const morgan = require("morgan");
const path = require("path");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 3000;
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

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => {
  console.log("server is ready to go on http://localhost:" + PORT);
});

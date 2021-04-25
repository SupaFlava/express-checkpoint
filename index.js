const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.use(express.static("views"));

app.listen(3000, () => {
  console.log("server running on port 300");
});

const currentDate = new Date();

const day = currentDate.getDay();
const hours = currentDate.getHours();

app.get("/", (req, res) => {
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
    next();
  } else {
    res.render("serverClose");
  }
});
app.get("/services", (req, res) => {
  res.render("ourServices");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dbURL =
  "mongodb+srv://sourav4253:sourav_4253@cluster0.su3zk.mongodb.net/Fake_Api?retryWrites=true&w=majority";
mongoose.connect(
  dbURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    app.listen(8080);
    console.log("db connected");
  }
);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("Home", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("About", { title: "About" });
});

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(require("./Router/UserRouter"));
app.use(require("./Router/ProductRouter"));
app.use(require("./Router/OrderRouter"));
app.use(require("./Router/CartRouter"));
app.use(require("./Router/CategoryRouter"));

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

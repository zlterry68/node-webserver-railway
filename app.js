require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Terry Tejada",
    titulo: "Curso de Node",
  });
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo en su respectiva ruta");
});
app.get("/generic", (req, res) => {
  // res.sendFile(__dirname + "/public/generic.html");
  res.render("generic", {
    nombre: "Terry Tejada",
    titulo: "Curso de Node",
  });
});
app.get("/elements", (req, res) => {
  // res.sendFile(__dirname + "/public/elements.html");
  res.render("elements", {
    nombre: "Terry Tejada",
    titulo: "Curso de Node",
  });
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

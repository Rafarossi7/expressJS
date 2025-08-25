const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;


app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.render("home", { mensagem: "Projeto ExpressJS!" });
});


app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/form", (req, res) => {
  const { nome, email } = req.body;
  res.send(`Dados recebidos: Nome = ${nome}, Email = ${email}`);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

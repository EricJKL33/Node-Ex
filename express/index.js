const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use("/static", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/form", (req, res) => {
  console.log(req.body);
  if (req.body.password == "1234") {
    res.send("connexion réussie");
  } else {
    res.redirect("/fichier/html?mdpIcorrect=1");
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/bonjour", (req, res) => {
  res.send("<h1>Bonjour tout le monde!</h1>");
});

app.get("/articles/:id", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`Vous avez demandé l'article ${req.params.id}`);
});

app.get("/fichier/html", (req, res) => {
  res.sendFile(path.join(__dirname, "views/page.html"));
});

app.get("/fichier/html", (req, res) => {
  console.log(req.body);

  if (req.body.password == "1234") {
    res.send("connexion réussie");
  } else {
    res.redirect("/fichier/html?mdpIcorrect=1");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const app = require("express")();

//const app = express()    es lo mismo

app.get("/hola", (req, res) => {
  res.json({ name: "Eugenia" }).status(200);
});

app.listen(3000);

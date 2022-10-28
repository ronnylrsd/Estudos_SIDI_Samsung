const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Ola minha imagem, sou lucas bem vindo!, a minha primeira aplicação"
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`);
});

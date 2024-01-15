const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Seja Bem-Vindo ao meu app!")
})

app.get("/sobre", function(req,res) {
    res.send("Minha pagina sobre");
})

app.get("/blog", function(req,res) {
    res.send("Bem vindo ao meu blog")
})


app.listen(8081, function() {
    console.log("Servidor Rodando na URL")
}); //tem que ser sempre a ultima linha do codigo



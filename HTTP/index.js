const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/HTML/index.html") // __dirname e pra pegar o diretoria raiz
})

app.get("/sobre", function(req,res) {
    res.sendFile(__dirname + "/HTML/sobre.html");
})

app.get("/blog", function(req,res) {
    res.send("Bem vindo ao meu blog")
})

app.get('/ola/:cargo/:nome/:cor', function(req,res) {
    res.send("<h1> Olá " + req.params.nome + "</h1>" +
    "<h2> Seu Cargo e:  " + req.params.cargo + "</h2>" + 
    "<h3> Sua cor favorita e:  " + req.params.cor + "</h3>")
}) // passando parametros pela url
// o send so pode usar uma vez


app.listen(8081, function() {
    console.log("Servidor Rodando na URL")
}); //tem que ser sempre a ultima linha do codigo



const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')


// config
   // Template Engine
   app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) // o main e o template padrão
   app.set('view engine', 'handlebars') // dizendo que quer usar o handbars como default
   // Body Parser
   app.use(bodyParser.urlencoded({extended: false}))
   app.use(bodyParser.json())


   // rotas 
   app.get('/cad', function(req,res) {
    res.render('formulario')
   })

   app.post('/add', function(req,res) {
    res.send("Texto: " +req.body.titulo + " Conteudo: "+req.body.conteudo)
   })

app.listen(8081, function() {
    console.log("Servidor Rodando na url http:localhost:8081");
});

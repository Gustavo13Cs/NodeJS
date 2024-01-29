const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


// config
   // Template Engine
   app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) // o main e o template padrão
   app.set('view engine', 'handlebars') // dizendo que quer usar o handbars como default

   // conexão com o banco de dados mysql
   const sequelize = new Sequelize('sistemadecadastro', 'root', '889447Gus', {
    host: "localhost",
    dialect: 'mysql'
   })

   // rotas 
   app.get('/cad', function(req,res) {
    res.render('formulario')
   })

app.listen(8081, function() {
    console.log("Servidor Rodando na url http:localhost:8081");
});

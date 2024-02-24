const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./Models/Post')

// config
   // Template Engine
   app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) // o main e o template padrão
   app.set('view engine', 'handlebars') // dizendo que quer usar o handbars como default
   // Body Parser
   app.use(bodyParser.urlencoded({extended: false}))
   app.use(bodyParser.json())


   // rotas 
   app.get('/',function(req,res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            console.log(posts)
            res.render('home', {posts:posts})
            
        })
   })

   app.get('/cad', function(req,res) {
    res.render('formulario')
   })

   app.post('/add', function(req,res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() {
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
   })

   app.get('/deletar/:id', function(req,res) {
    Post.destroy({where: {'id': req.params.id}}).then(function() {
        res.send("Postagem deletada com sucesso!")
    }).catch(function(erro) {
        res.send("Esta postagem deu erro")
    })
   })

app.listen(8081, function() {
    console.log("Servidor Rodando na url http:localhost:8081");
});

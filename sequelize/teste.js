const Sequelize = require('sequelize') 
const sequelize = new Sequelize('sistemadecadastro','root', '889447Gus', {
    host: "localhost",
    dialect: 'mysql'
}) //conetando ao mysql

// sequelize.authenticate().then(function() { //then ela so e chamada se o evento for disparado
//     console.log("Conetado com sucesso!")
// }).catch(function(erro) { //cath apenas se da erro 
//     console.log("Falha ao se conectar: " + erro)
// })

// criando um model no mysql por aqui

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//vPostagem.sync({force: true}) //assim vai ter ctz que vai ser criado

const Clientes = sequelize.define('clientes' , {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Clientes.sync({force: true})

Postagem.create({
    titulo: "Um titulo qualquer",
    conteudo: "Sla kkkkkkkkkk"
})

Clientes.create({
    nome: "Gustavo",
    sobrenome: "Cunha",
    idade: 20,
    email: "gustavocunha0401@gmail.com"
})


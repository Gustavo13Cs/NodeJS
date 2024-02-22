const db = require('./db') //exportando o banco

// criando a tabela
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },

    conteudo: {
        type: db.Sequelize.TEXT
    }
})

// toda vez que executar essa linha , comente dps pra n criar novamente
// Post.sync({force: true})

module.exports = Post
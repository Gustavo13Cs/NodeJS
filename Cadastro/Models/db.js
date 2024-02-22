const Sequelize = require('sequelize')

// conexão com o banco de dados mysql
const sequelize = new Sequelize('postapp', 'root', '889447Gus', {
    host: "localhost",
    dialect: 'mysql'
   })

module.exports = { //exportando as duas ao mesmo tempo 
    Sequelize: Sequelize,
    sequelize: sequelize
}
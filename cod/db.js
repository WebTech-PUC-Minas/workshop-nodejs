const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'workshop_nodejs',
    port: 5432,
    username: 'postgres',
    password: '123456',
    dialect: 'postgres'
})

async function connectToDb() {

    try {
        await sequelize.authenticate();
        console.log("Conectado ao banco de dados com sucesso!")
    } catch (error) {
        console.error("Não foi possivel conectar ao banco de dados!", error);
    }
    
}

module.exports = {
    sequelize,
    connectToDb,
}
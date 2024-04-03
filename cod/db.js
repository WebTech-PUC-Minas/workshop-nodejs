const { Sequelize } = require('sequelize');

// https://www.elephantsql.com/plans.html
const sequelize = new Sequelize(`postgres://gwscigzf:${process.env.PASSWORD}@isabelle.db.elephantsql.com/gwscigzf`);

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
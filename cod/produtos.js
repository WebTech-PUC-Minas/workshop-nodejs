const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

const Produtos = sequelize.define('produtos', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(10,10),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Produtos;
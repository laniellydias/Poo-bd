let {Sequelize, DataTypes} = require("sequelize");
let db = require("../../db");

const Cliente = db.define("Cliente",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome : {
            type: DataTypes.STRING,
            allowNull: false
        },
        endereco: DataTypes.STRING
    }
);

module.exports = Cliente;
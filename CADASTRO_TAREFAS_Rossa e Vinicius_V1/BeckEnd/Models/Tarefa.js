const {DataTypes}=require("sequelize");
const sequelize= require("../database/db");

const Tarefa = sequelize.define("Tarefa", {
    título: {
        type: DataTypes.STRING,
        allownull:false,

    }, 

    descricao: {

        type: DataTypes.STRING,
        allownull: false,

    },
    responsavel: {
        type: DataTypes.STRING,
        allownull:false,

    },

    status: {
        type: DataTypes.STRING,
        defaultValue: "Pendente",


    }

});

module.exports = Tarefa;
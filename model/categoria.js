//IMPORTAÇÃO DO MODULO SEQUELIZE
const sequelize = require("sequelize");

//IMPORTAÇÃO DA CONEXÃO  COM BANCO DE DADOS
const connection = require("../database/Database");

/**
 * MAPEAMENTO DA TABELA DE CATEGORIA
 * 
 * PARAMETROS DO METODO DEFINE:
 * 1 - NOME DA TABELA
 * 2 - CAMPOS DA TABELA
 */

const Categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria: {
            type: sequelize.INTEGER(10),
            autoIncrement: true,
            primaryKey: true
        },
        nome_categoria: {
            type: sequelize.STRING(255),
            allowNull: false
        },
        observacoes_categoria: {
            type: sequelize.TEXT,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

// Categoria.belongsTo(Produto, {
//     constraint: true,
//     foreignKey: 'codigo_categoria'
// })

Categoria.sync({ force: false })

module.exports = Categoria
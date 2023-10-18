/*Importação do módulo do Sequelize*/
const Sequelize = require('sequelize');

/*Importação da conexão com o banco de dados*/
const connection = require('../database/Database');

/*Importação da tabela de categoria para criação da chave estrangeira
representanto a cardinalidade*/
const Categoria = require('./Categoria');

const Livro = connection.define(
    'tbl_livro',
    {
        codigo_livro:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        codigo_categoria:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        titulo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        preco:{
            type: Sequelize.STRING,
            allowNull: false
        },
        imagem_peq:{
            type: Sequelize.STRING,
            allowNull: false
        },
        imagem_grd:{
            type: Sequelize.STRING,
            allowNull: false
        },
        detalhes:{
            type: Sequelize.TEXT,
            allowNull: false
        }
    }
);

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/
Categoria.hasMany(Livro, {
    foreignKey: 'codigo_categoria',
    sourceKey: 'codigo_categoria'
});


/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
Livro.belongsTo(Categoria, {
    foreignKey: 'codigo_categoria',
    sourceKey: 'codigo_categoria'
});

Livro.sync({force:false});

module.exports = Livro;
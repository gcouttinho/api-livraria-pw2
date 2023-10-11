/*Importação do módulo do Sequelize*/
const Sequelize = require('sequelize');

/*Importação da conexão com o banco de dados*/
const connection = require('../database/database');

/*Importação da tabela de categoria para criação da chave estrangeira
representanto a cardinalidade*/
const Categoria = require('./categoria');

const Livro = connection.define(
    'tbl_livro',
    {
        codigo_livro:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        imagen_peq:{
            type: Sequelize.STRING(500),
            allowNull: false
        },
        imagem_grd:{
            type: Sequelize.STRING(500),
            allowNull: false
        },
        detalhes:{
            type: Sequelize.TEXT,
            allowNull: false
        }
    }
);

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/
Categoria.hasMany(Livro);


/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
Livro.belongsTo(Categoria);

//Livro.sync({force:true});

module.exports = Livro;
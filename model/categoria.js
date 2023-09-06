//IMPORTAÇÃO DO MODULO SEQUELIZE
const sequelize = require("sequelize");

//IMPORTAÇÃO DA CONEXÃO  COM BANCO DE DADOS
const connection = require("../database/database");

/**
 * MAPEAMENTO DA TABELA DE CATEGORIA
 */

const categoria = (connection.define());
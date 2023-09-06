//IMPORTAÇÃO SEQUELIZE
const sequelize = require("sequelize");

//CRIA A CONEXÃO COM O BANCO DE DADOS POR MRIO DO SEQUELIZE

/*
PARAMETROS:
1º - NOME DO BANCO DE DADOS
1º - USUARIO DO BANCO DE DADOS
1º - A SENHA DO BANCO DE DADOS
1º - OBJETO JSON COM DADOS DE CONFIGURAÇÃO
        1 - HOST DO BANCO DE DADOS 
        1 - PORTA LOGICA DO BANCO DE DADOS 
        1 - DIALETO SQL A SER UTILIZADO
        1 - TIMEZONE
*/

const connection = new sequelize(
    "bd_api_livraria",
    "root",
    "",
    {
        host: "localhost",
        port: "3306",
        dialect: "mysql",
        timezone: "-3:00",
    }
);

module.exports = connection;
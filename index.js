//IMPORTAÇÃO DO MODULO EXPRESS
const express = require("express");

//INSTANCIA DO MODULO EXPRESS
const app = express();

//CONFIGURAÇÃO PARA O EXPRESS MANIPULAR O JSON
app.use(express.json());

//CONFIGURAÇÃO PARA O EXPRESS TRABALHAR COM OS DADOS DO FORMULARIO
app.use(express.urlencoded({extended:true}))

const connection = require("./database/database");
console.log(connection);

//IMPORTAÇÃO DAS ROTAS
const categoriaController = require("./controller/categoria");
app.use("/", categoriaController);

//CRIAÇÃO DO SERVIDOR COM REQUISIÇÕES E RESPOSTAS
app.listen(3000, () => {
    console.log('API LIVRARIA RODANDO NA PORTA: http://localhost:3000');
});
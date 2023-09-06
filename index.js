//IMPORTAÇÃO DO MODULO EXPRESS
const express = require("express");

//INSTANCIA DO MODULO EXPRESS
const app = express();

//CONFIGURAÇÃO PARA O EXPRESS MANIPULAR O JSON
app.use(express.json());

//CONFIGURAÇÃO PARA O EXPRESS TRABALHAR COM OS DADOS DO FORMULARIO
app.use(express.urlencoded({extended:true}))

//CRIAÇÃO DO SERVIDOR COM REQUISIÇÕES E RESPOSTAS

app.listen(3000, () => {
    console.log('API LIVRARIA RODANDO EM: http://localhost:3000');
});
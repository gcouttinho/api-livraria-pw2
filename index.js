
//IMPORTAÇÃO DO MODULO EXPRESS
const express = require("express");

//INSTANCIA DO MODULO EXPRESS
const app = express();

//CONFIGURAÇÃO PARA O EXPRESS MANIPULAR O JSON
app.use(express.json());

//CONFIGURAÇÃO PARA O EXPRESS TRABALHAR COM OS DADOS DO FORMULARIO
app.use(express.urlencoded({extended:true}))

const categoriaModel = require("./model/Categoria");
const livroModel = require("./model/Livro");

const connection = require("./database/Database");
console.log(connection);

//IMPORTAÇÃO DAS ROTAS
const categoriaController = require("./controller/CategoriaController");
app.use("/", categoriaController);

const livroController = require("./controller/LivroController");
app.use("/", livroController);

//CRIAÇÃO DO SERVIDOR COM REQUISIÇÕES E RESPOSTAS
app.listen(3000, () => {
    console.log('API LIVRARIA RODANDO NA PORTA: http://localhost:3000');
});
const express = require("express");
const categoriaModel = require("../model/Categoria");
const { json } = require("sequelize");
const router = express.Router();

// Rota para cadastrar uma nova categoria
router.post("/categoria/cadastrarCategoria", (req, res) => {
    const { nome_categoria, observacoes_categoria } = req.body;

    categoriaModel.create({ nome_categoria, observacoes_categoria })
        .then(() => {
            res.status(201).json({
                errorStatus: false,
                messageStatus: `Categoria ${nome_categoria} inserida com sucesso!`
            });
        })
        .catch((error) => {
            res.status(500).json({
                errorStatus: true,
                messageStatus: error
            });
        });
});

// Rota para listar uma categoria específica
router.get("/categoria/listarID/:codigo_categoria", (req, res) => {
    const { codigo_categoria } = req.params;

    categoriaModel.findByPk(codigo_categoria)
        .then((categoria) => {
            if (categoria) {
                res.status(200).json({
                    errorStatus: false,
                    messageStatus: `Categoria ${categoria.nome_categoria} encontrada com sucesso!`,
                    categoria: categoria
                });
            } else {
                res.status(404).json({
                    errorStatus: true,
                    messageStatus: `Categoria ${codigo_categoria} não encontrada!`
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                errorStatus: true,
                messageStatus: error,
            });
        });
});

// Rota para listar todas as categorias
router.get("/categoria/listarCategorias", (req, res) => {
    categoriaModel.findAll()
        .then((categorias) => {
            res.status(200).json({
                errorStatus: false,
                messageStatus: `Você tem ${categorias.length} categoria(s) cadastrada(s)!`,
                categorias: categorias,
            });
        })
        .catch((error) => {
            res.status(500).json({
                errorStatus: true,
                messageStatus: error,
            });
        });
});

router.put("/categoria/alterarCategoria/:codigo_categoria", (req, res) => {
    const { codigo_categoria } = req.params;
    const { nome_categoria, observacoes_categoria } = req.body;

    let nomeAntigo = "";
    let observacoesAntigas = "";

    categoriaModel.findByPk(codigo_categoria)
        .then((categoria) => {
            if (!categoria) {
                return res.status(404).json({
                    errorStatus: true,
                    messageStatus: `Categoria de código ${codigo_categoria} não encontrada`
                });
            } else {
                nomeAntigo = categoria.nome_categoria;
                observacoesAntigas = categoria.observacoes_categoria;
                return categoriaModel.update({ nome_categoria, observacoes_categoria }, {
                    where: {
                        codigo_categoria: codigo_categoria
                    }
                });
            }
        })
        .then(() => {
            return res.status(200).json({
                errorStatus: false,
                messageStatus: `Categoria de código ${codigo_categoria} alterada com sucesso! Nome antigo: ${nomeAntigo}
                Observações antigas: ${observacoesAntigas}
                Nome novo: ${nome_categoria}
                Observações novas: ${observacoes_categoria}`
            });
        })
        .catch((error) => {
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            });
        });
});

/* 
router.put("/categoria/alterarCategoria", (req, res) => {
    let {codigo_categoria, nome_categoria} = req.body;

    categoriaModel.update(
        {nome_categoria},
        {where:{codigo_categoria}}
        )
        .then(
            ()=>{
                return res.status(200).json(
                    {
                        errorStatus: false,
                        messageStatus: "Categoria alterada com sucesso!"
                    }
                )
            }
        )
        .catch(
            (error) => {
                return res.status(500).json({
                    errorStatus: true,
                    messageStatus: error
                });
            });
});
 */

router.delete("/categoria/excluirCategoria/:codigo_categoria", (req, res) => {
    const { codigo_categoria } = req.params;

    categoriaModel.findByPk(codigo_categoria)
        .then((categoria) => {
            if (!categoria) {
                return res.status(404).json({
                    errorStatus: true,
                    messageStatus: `Categoria de código ${codigo_categoria} não encontrada`
                });
            } else {
                return categoriaModel.destroy({
                    where: {
                        codigo_categoria: codigo_categoria
                    }
                });
            }
        })
        .then(() => {
            return res.status(200).json({
                errorStatus: false,
                messageStatus: `Categoria de código ${codigo_categoria} excluída com sucesso!`
            });
        })
        .catch((error) => {
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            });
        });
});

module.exports = router;
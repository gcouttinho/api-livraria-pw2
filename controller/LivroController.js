const express = require('express');

const app = express();
const router = express.Router();

const livro = require('../model/Livro');

router.post('/livro/cadastrarLivro', (req, res) => {

    const { titulo, preco, imagem_peq, imagem_grd, detalhes, codigo_categoria } = req.body;


    livro.create(
        {
            titulo,
            preco,
            imagem_peq,
            imagem_grd,
            detalhes,
            codigo_categoria

        }
    ).then(
        () => {
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: `O livro '${titulo}' foi inserido com sucesso.`
            });
        }
    ).catch((erro) => {
        return res.status(400).json({
            erroStatus: true,
            erroMensagem: erro
        });
    });

});

router.get('/livro/listarLivro', (req, res) => {

    livro.findAll()
        .then((livros) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: `Você tem ${livros.length} livros cadastrados.`,
                livros: livros
            });
        }).catch((erro) => {
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
});

router.get('/livro/listarLivroCodigo/:codigo_livro', (req, res) => {

    const { codigo_livro } = req.params

    livro.findByPk(codigo_livro)
        .then((livro) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: `Livro '${livro.titulo}' encontrado com sucesso.`,
                livro: livro
            });
        }).catch((erro) => {
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
});

router.get('/livro/listarLivroCategoria/:codigo_categoria', (req, res) => {
    const { codigo_categoria } = req.params

    livro.findAll({
        where: { codigo_categoria }
    })
        .then((livros) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: `Você tem ${livros.length} livros cadastrados na categoria ${codigo_categoria}.`,
                livros: livros
            })
        }).catch((erro) => {
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
}
);


router.delete('/livro/excluirLivro/:codigo_livro', (req, res) => {

    const { codigo_livro } = req.params;

    livro.destroy({
        where: { codigo_livro }
    }).then(
        () => {

            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: `Livro ${codigo_livro} excluído com sucesso.`
            });

        }).catch((erro) => {
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });

});

router.put('/livro/editarLivro', (req, res)=>{

    const { titulo, preco, imagem_peq,imagem_grd, detalhes, codigo_categoria, codigo_livro } = req.body;

            livro.update(
                {
                titulo,
                preco,
                imagem_peq,
                imagem_grd,
                detalhes,
                codigo_categoria
            },
                {where: {codigo_livro}}
            ).then(
                ()=>{
                    return res.status(200).json({
                        erroStatus:false,
                        mensagemStatus: `Livro ${titulo} alterado com sucesso.`
                    });
                }).catch((erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMensagem: erro
                    });
                });

});

module.exports = router;
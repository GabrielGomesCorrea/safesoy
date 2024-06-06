var superUsuarioModel = require("../models/superUsuarioModel");

function listarFazenda(req, res) {
    var fkFazenda = req.params.fkFazenda    
    superUsuarioModel.listarFazenda(fkFazenda).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o historico: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarFuncionario(req, res) {
    var superFuncFuncionarios = req.params.superFuncionarioFunc
    superUsuarioModel.listarFuncionario(superFuncFuncionarios).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o historico: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// Função de deletar o usuario
function deletar(req, res) {
    var rf = req.body.rfServer;
    superUsuarioModel.deletar(rf)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listarFazenda,
    listarFuncionario,
    deletar
  }
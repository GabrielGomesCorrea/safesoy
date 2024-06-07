var dashboardModel = require("../models/dashboardModel");

function historico(req, res) {
    dashboardModel.historico().then(function (resultado) {
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

function temperatura(req, res) {

    var fkFazenda = req.params.fkFazenda;
    dashboardModel.temperatura(fkFazenda).then(function (resultado) {
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

module.exports = {
    historico,
    temperatura
  }
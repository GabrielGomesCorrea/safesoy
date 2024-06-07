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

<<<<<<< HEAD
function temperatura(req, res) {

    var fkFazenda = req.params.fkFazenda;
    dashboardModel.temperatura(fkFazenda).then(function (resultado) {
=======
function countCritico(req, res) {
    dashboardModel.countCritico().then(function (resultado) {
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

function tempCritico(req, res) {
    dashboardModel.tempCritico().then(function (resultado) {
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

function umidCritico(req, res) {
    dashboardModel.umidCritico().then(function (resultado) {
>>>>>>> e3859ec9694087c0726e9f9611043e9ffb890943
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
<<<<<<< HEAD
    temperatura
=======
    countCritico,
    tempCritico,
    umidCritico
>>>>>>> e3859ec9694087c0726e9f9611043e9ffb890943
  }
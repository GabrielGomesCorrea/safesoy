var dashboardModel = require("../models/dashboardModel");

function historico(req, res) {
    var fkFazenda = req.params.fkFazenda;
    dashboardModel.historico(fkFazenda).then(function (resultado) {
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

function dados(req, res) {
    var dadosFazenda = req.params.fkFazenda;
    
    dashboardModel.dados(dadosFazenda).then(function (resultado) {
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
    dados,
    countCritico,
    tempCritico,
    umidCritico
}
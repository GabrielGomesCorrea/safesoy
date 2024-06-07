var express = require("express");
var router = express.Router();

var superUsuarioController = require("../controllers/superUsuarioController.js");

router.get("/listarFazenda/:fkFazenda", function (req, res) {
    superUsuarioController.listarFazenda(req, res);
});
router.get("/listarFuncionario/:superFuncionarioFunc", function (req, res) {
    superUsuarioController.listarFuncionario(req, res);
});
router.post("/deletar", function (req, res) {
    superUsuarioController.deletar(req, res);
});
module.exports = router;
var express = require("express");
var router = express.Router();

var superUsuarioController = require("../controllers/superUsuarioController.js");

router.get("/listarFazenda", function (req, res) {
    superUsuarioController.listarFazenda(req, res);
});
router.get("/listarFuncionario/:rfFunc", function (req, res) {
    superUsuarioController.listarFuncionario(req, res);
});
module.exports = router;
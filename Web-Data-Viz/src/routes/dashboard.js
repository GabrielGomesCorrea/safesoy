var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController.js");

router.get("/historico/:fkFazenda", function (req, res) {
    dashboardController.historico(req, res);
});
router.get("/dados/:fkSetor", function (req, res) {
    dashboardController.dados(req, res);
});
router.get("/countCritico/:fkFazenda", function (req, res) {
    dashboardController.countCritico(req, res);
});

router.get("/tempCritico/:fkFazenda", function (req, res) {
    dashboardController.tempCritico(req, res);
});

router.get("/umidCritico/:fkFazenda", function (req, res) {
    dashboardController.umidCritico(req, res);
});

module.exports = router;
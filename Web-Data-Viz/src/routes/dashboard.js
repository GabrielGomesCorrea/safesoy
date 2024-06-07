var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController.js");

router.get("/historico", function (req, res) {
    dashboardController.historico(req, res);
});

router.get("/temperatura/:fkFazenda", function (req, res) {
    dashboardController.temperatura(req, res);
});
router.get("/countCritico", function (req, res) {
    dashboardController.countCritico(req, res);
});

router.get("/tempCritico", function (req, res) {
    dashboardController.tempCritico(req, res);
});

router.get("/umidCritico", function (req, res) {
    dashboardController.umidCritico(req, res);
});

module.exports = router;
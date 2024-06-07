var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController.js");

router.get("/historico", function (req, res) {
    dashboardController.historico(req, res);
});

router.get("/temperatura/:fkFazenda", function (req, res) {
    dashboardController.temperatura(req, res);
});
module.exports = router;
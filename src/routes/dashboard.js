var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/species", function (req, res) {
    dashboardController.species(req, res);
});

router.get("/weapons", function (req, res) {
    dashboardController.weapons(req, res);
});

module.exports = router;
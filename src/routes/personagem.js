var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

//Recebendo os dados do html e direcionando para a função criar de personagemController.js
router.post("/criar", function (req, res) {
    personagemController.criar(req, res);
})

router.get("/exibir/:idusuario", function (req, res) {
    personagemController.exibir(req, res);
});

module.exports = router;
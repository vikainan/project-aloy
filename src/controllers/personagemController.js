var personagemModel = require("../models/personagemModel");

function exibir(req, res) {
	var idusuario = req.params.idusuario;

	if (idusuario == undefined) {
		res.status(400).send("idusuario está undefined!");
	} else {
		personagemModel
			.exibir(idusuario)
			.then(function (resultado) {
				console.log(`\nResultados encontrados: ${resultado.length}`);
				console.log(`Resultados: ${JSON.stringify(resultado)}`);
				if (resultado.length == 1) {
					res.status(200).json(resultado);
				}
			})
			.catch(function (erro) {
				console.log(erro);
				console.log("\nHouve um erro ao exibir perfil! Erro: ", erro.sqlMessage);
				res.status(500).json(erro.sqlMessage);
			});
	}
}

function criar(req, res) {
	var idusuario = req.body.idusuario;
	var nome = req.body.nome;
	var especie = req.body.especie;
	var strength = req.body.strength;
	var defense = req.body.defense;
	var wisdom = req.body.wisdom;
	var charisma = req.body.charisma;
	var vitality = req.body.vitality;
	var dexterity = req.body.dexterity;
	var toparmor = req.body.toparmor;
	var middlearmor = req.body.middlearmor;
	var lowerarmor = req.body.lowerarmor;
	var bottomarmor = req.body.bottomarmor;
	var weapon = req.body.weapon;

	if (nome == undefined) {
		res.status(400).send("nome está undefined!");
	} else if (especie == undefined) {
		res.status(400).send("especie está undefined!");
	} else if (strength == undefined) {
		res.status(400).send("strength está undefined!");
	} else if (defense == undefined) {
		res.status(400).send("defense está undefined!");
	} else if (wisdom == undefined) {
		res.status(400).send("wisdom está undefined!");
	} else if (charisma == undefined) {
		res.status(400).send("charisma está undefined!");
	} else if (vitality == undefined) {
		res.status(400).send("vitality está undefined!");
	} else if (dexterity == undefined) {
		res.status(400).send("dexterity está undefined!");
	} else if (toparmor == undefined) {
		res.status(400).send("toparmor está undefined!");
	} else if (middlearmor == undefined) {
		res.status(400).send("middlearmor está undefined!");
	} else if (lowerarmor == undefined) {
		res.status(400).send("lowerarmor está undefined!");
	} else if (bottomarmor == undefined) {
		res.status(400).send("bottomarmor está undefined!");
	} else if (weapon == undefined) {
		res.status(400).send("weapon está undefined!");
	} else {
		personagemModel
			.criar(idusuario, nome, especie, strength, defense, wisdom, charisma, vitality, dexterity, toparmor, middlearmor, lowerarmor, bottomarmor, weapon)
			.then(function (resultado) {
				res.json(resultado);
			})
			.catch(function (erro) {
				console.log(erro);
				console.log("\nHouve um erro ao criar o personagem! Erro: ", erro.sqlMessage);
				res.status(500).json(erro.sqlMessage);
			});
	}
}

module.exports = {
	exibir,
	criar,
};

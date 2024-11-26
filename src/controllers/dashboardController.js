var dashboardModel = require("../models/dashboardModel");

function species(req, res) {
	dashboardModel
		.species()
		.then(function (resultado) {
			console.log(`Resultados: ${JSON.stringify(resultado)}`);
			res.status(200).json(resultado);
		})
		.catch(function (erro) {
			console.log(erro);
			console.log("\nHouve um erro ao exibir população de especies! Erro: ", erro.sqlMessage);
			res.status(500).json(erro.sqlMessage);
		});
}

function weapons(req, res) {
	dashboardModel
		.weapons()
		.then(function (resultado) {
			console.log(`Resultados: ${JSON.stringify(resultado)}`);
			res.status(200).json(resultado);
		})
		.catch(function (erro) {
			console.log(erro);
			console.log("\nHouve um erro ao exibir popularidade de armas! Erro: ", erro.sqlMessage);
			res.status(500).json(erro.sqlMessage);
		});
}

module.exports = {
	species,
	weapons,
};

var database = require("../database/config");

async function species() {
	var instrucaoSql = `
        SELECT especie, COUNT(especie) AS count
        FROM personagem
        GROUP BY especie;
    `;
	var results = await database.executar(instrucaoSql);

	var speciesCount = {};
	results.forEach((row) => {
		speciesCount[row.especie] = row.count;
	});

	return speciesCount;
}

async function weapons() {
	var instrucaoSql = `
        SELECT weapon, COUNT(weapon) AS count
        FROM equipamento
        GROUP BY weapon;
    `;
	var results = await database.executar(instrucaoSql);

	var weaponCount = {};
	results.forEach((row) => {
		weaponCount[row.weapon] = row.count;
	});

	return weaponCount;
}

module.exports = {
	species,
	weapons,
};

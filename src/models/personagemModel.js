var database = require("../database/config");

function exibir(idusuario) {
	var instrucaoSql = `
    SELECT * FROM personagem inner join equipamento WHERE idusuario = ${idusuario}`;
	console.log("Executando a instrução SQL: \n" + instrucaoSql);
	return database.executar(instrucaoSql);
}

async function criar(idusuario, nome, especie, strength, defense, wisdom, charisma, vitality, dexterity, toparmor, middlearmor, lowerarmor, bottomarmor, weapon) {
	var instrucaoSql1 = `
        INSERT INTO personagem (
        idusuario,
        nome, 
        especie, 
        strength, 
        defense, 
        wisdom, 
        charisma, 
        vitality, 
        dexterity) 
        VALUES (
            '${idusuario}', 
            '${nome}', 
            '${especie}', 
            '${strength}', 
            '${defense}', 
            '${wisdom}', 
            '${charisma}', 
            '${vitality}', 
            '${dexterity}');
            `;

	await database.executar(instrucaoSql1);
	console.log("Executando a instrução SQL: \n" + instrucaoSql1);

	var instrucaoSql2 = `SELECT idpersonagem FROM personagem WHERE idusuario = ${idusuario}`;
	var personagem = await database.executar(instrucaoSql2);
	console.log("Executando a instrução SQL: \n" + instrucaoSql2);
	console.log(personagem);

	var idpersonagem = personagem[0].idpersonagem;

	var instrucaoSql3 = `
        INSERT INTO equipamento (
            idpersonagem, 
            toparmor, 
            middlearmor, 
            lowerarmor, 
            bottomarmor, 
            weapon) 
            VALUES (
                '${idpersonagem}', 
                '${toparmor}', 
                '${middlearmor}', 
                '${lowerarmor}', 
                '${bottomarmor}', 
                '${weapon}');
                `;

	return database.executar(instrucaoSql3);
}

module.exports = {
	exibir,
	criar,
};

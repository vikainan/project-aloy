var database = require("../database/config");

function criar(idusuario, nome, especie, strength, defense, wisdom, charisma, vitality, dexterity, toparmor, middlearmor, lowerarmor, bottomarmor, weapon) {
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

	database.executar(instrucaoSql1);
	console.log("Executando a instrução SQL: \n" + instrucaoSql1);

	var instrucaoSql2 = `SELECT idpersonagem FROM personagem WHERE idusuario = ${idusuario}`;
	var personagem = database.executar(instrucaoSql2);
	console.log("Executando a instrução SQL: \n" + instrucaoSql2);
	console.log(personagem);

	var instrucaoSql3 = `
    INSERT INTO equipamento (
        idpersonagem, 
        toparmor, 
        middlearmor, 
        lowerarmor, 
        bottomarmor, 
        weapon) 
        VALUES (
            '(${instrucaoSql2})', 
            '${toparmor}', 
            '${middlearmor}', 
            '${lowerarmor}', 
            '${bottomarmor}', 
            '${weapon}');
            `;

	database.executar(instrucaoSql3);
	console.log("Executando a instrução SQL: \n" + instrucaoSql3);

	// var instrucaoSql4 = `SELECT * FROM equipamento WHERE idpersonagem = ${personagem[0].idpersonagem}`;
	// var equipamento = database.executar(instrucaoSql4);

	return { personagem: personagem[0], equipamento: equipamento[0] };
}

module.exports = {
	criar,
};

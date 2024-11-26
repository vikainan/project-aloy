function exibir() {
	var idusuario = sessionStorage.getItem("idusuario");

	fetch(`/personagem/exibir/${idusuario}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(function (resposta) {
			console.log("resposta: ", resposta);

			if (resposta.ok) {
				resposta.json().then((json) => {
                    var slotName = document.getElementById("slotName");
					var slotSpecie = document.getElementById("slotSpecie");
					var spcImg = document.getElementById("spcImg");
                    
                    slotName.innerHTML = `${json[0].nome}`;
                    slotSpecie.innerHTML = `${json[0].especie}`;
                    
                    if (json[0].especie == "Sylph") {
                        spcImg.innerHTML = `
                        <img src="assets/img/species/sylph.png" />`;
                    } else if (json[0].especie == "Salamander") {
                        spcImg.innerHTML = `
                        <img src="assets/img/species/salamander.png" />`;
                    } else if (json[0].especie == "Gnome") {
                        spcImg.innerHTML = `
                        <img src="assets/img/species/gnome.png" />`;
                    } else if (json[0].especie == "Undine") {
                        spcImg.innerHTML = `
                        <img src="assets/img/species/undine.png" />`;
                    } else if (json[0].especie == "Cait_Sith") {
                        spcImg.innerHTML = `
                        <img src="assets/img/species/cait_sith.png" />`;
                    } else if (json[0].especie == "Imp") {
                        spcImg.innerHTML = `
                        <img src="assets/img/species/imp.png" />`;
                    } else if (json[0].especie == "Pooka") {
                        spcImg.innerHTML = `
                        <img src="assets/img/species/pooka.png" />`;
                    } else if (json[0].especie == "Spriggan") {
                        spcImg.innerHTML = `
                        <img src="assets/img/species/spriggan.png" />`;
                    } else if (json[0].especie == "Leprechaun") {
                        spcImg.innerHTML = `
                        <img src="assets/img/species/leprechaun.png" />`;
                    }

					equipChange(json[0].toparmor);
					equipChange(json[0].middlearmor);
					equipChange(json[0].lowerarmor);
					equipChange(json[0].bottomarmor);

					var slotWeapon = document.getElementById("slotWeapon");

					if (json[0].weapon == "sword") {
						slotWeapon.innerHTML = `<img src="assets/img/weapon/sword.png"/>`;
					} else if (json[0].weapon == "wand") {
						slotWeapon.innerHTML = `<img src="assets/img/weapon/wand.png"/>`;
					} else if (json[0].weapon == "bow") {
						slotWeapon.innerHTML = `<img src="assets/img/weapon/bow.png"/>`;
					} else if (json[0].weapon == "dagger") {
						slotWeapon.innerHTML = `<img src="assets/img/weapon/dagger.png"/>`;
					} else if (json[0].weapon == "polearm") {
						slotWeapon.innerHTML = `<img src="assets/img/weapon/polearm.png"/>`;
					} else if (json[0].weapon == "shield") {
						slotWeapon.innerHTML = `<img src="assets/img/weapon/shield.png"/>`;
					}


					var divAtbStr = document.getElementById("divAtbStr");
					var divAtbDef = document.getElementById("divAtbDef");
					var divAtbVit = document.getElementById("divAtbVit");
					var divAtbWis = document.getElementById("divAtbWis");
					var divAtbDex = document.getElementById("divAtbDex");
					var divAtbCha = document.getElementById("divAtbCha");

					str = json[0].strength;
					divAtbStr.innerHTML = `STR +${str}`;

					def = json[0].defense;
					divAtbDef.innerHTML = `DEF +${def}`;

					vit = json[0].vitality;
					divAtbVit.innerHTML = `VIT +${vit}`;

					wis = json[0].wisdom;
					divAtbWis.innerHTML = `WIS +${wis}`;

					dex = json[0].dexterity;
					divAtbDex.innerHTML = `DEX +${dex}`;

					cha = json[0].charisma;
					divAtbCha.innerHTML = `CHA +${cha}`;

					chart.data.datasets[0].data = [str, def, vit, wis, dex, cha];
					chart.update();
				});
			} else {
				alert("Houve um erro ao exibir o personagem!");
				throw "Houve um erro ao exibir o personagem!";
			}
		})
		.catch(function (resposta) {
			console.log(`#ERRO: ${resposta}`);
		});
}
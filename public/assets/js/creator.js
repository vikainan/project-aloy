function spc() {
	var specie = document.getElementById("iptSpc").value;

	if (specie == 1) {
		spcImg.innerHTML = `
        <img src="assets/img/species/sylph.png" />`;
	} else if (specie == 2) {
		spcImg.innerHTML = `
        <img src="assets/img/species/salamander.png" />`;
	} else if (specie == 3) {
		spcImg.innerHTML = `
        <img src="assets/img/species/gnome.png" />`;
	} else if (specie == 4) {
		spcImg.innerHTML = `
        <img src="assets/img/species/undine.png" />`;
	} else if (specie == 5) {
		spcImg.innerHTML = `
        <img src="assets/img/species/cait_sith.png" />`;
	} else if (specie == 6) {
		spcImg.innerHTML = `
        <img src="assets/img/species/imp.png" />`;
	} else if (specie == 7) {
		spcImg.innerHTML = `
        <img src="assets/img/species/pooka.png" />`;
	} else if (specie == 8) {
		spcImg.innerHTML = `
        <img src="assets/img/species/spriggan.png" />`;
	} else if (specie == 9) {
		spcImg.innerHTML = `
        <img src="assets/img/species/leprechaun.png" />`;
	} else {
		spcImg.innerHTML = `<img src="assets/img/allraces.svg" />`;
	}
}

var counter = str + def + vit + wis + dex + cha;
var str = 5;
var def = 5;
var wis = 5;
var cha = 5;
var vit = 5;
var dex = 5;
var chart;

function onload() {
	var divAtbStr = document.getElementById("divAtbStr");
	var divAtbDef = document.getElementById("divAtbDef");
	var divAtbVit = document.getElementById("divAtbVit");
	var divAtbWis = document.getElementById("divAtbWis");
	var divAtbDex = document.getElementById("divAtbDex");
	var divAtbCha = document.getElementById("divAtbCha");

	divAtbStr.innerHTML = `STR +${str}`;
	divAtbDef.innerHTML = `DEF +${def}`;
	divAtbVit.innerHTML = `VIT +${vit}`;
	divAtbWis.innerHTML = `WIS +${wis}`;
	divAtbDex.innerHTML = `DEX +${dex}`;
	divAtbCha.innerHTML = `CHA +${cha}`;

	var ctx = document.getElementById("atbChart").getContext("2d");

	chart = new Chart(ctx, {
		type: "radar",

		data: {
			labels: ["STR", "DEF", "VIT", "WIS", "DEX", "CHA"],
			datasets: [
				{
					label: "",
					data: [str, def, vit, wis, dex, cha],
					fill: true,
					backgroundColor: "rgba(0, 64, 128, 0.5)",
				},
			],
		},

		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				r: {
					angleLines: {
						display: true,
						color: "black",
					},
					grid: {
						display: false,
					},
					ticks: {
						display: false,
					},
					pointLabels: {
						// padding: 1,
						color: "rgba(255, 255, 255, 0.8)",
						font: {
							size: 12,
							// style: "italic",
							lineHeight: 1.2,
							family: "aincrad-font",
							borderColor: "red",
						},
					},
					suggestedMin: 1,
					suggestedMax: 10,
				},
			},
		},
	});
}

function sub(fieldname) {
	if (fieldname == "strength" && str > 1) {
		str--;
		divAtbStr.innerHTML = `STR +${str}`;
	}
	if (fieldname == "defense" && def > 1) {
		def--;
		divAtbDef.innerHTML = `DEF +${def}`;
	}
	if (fieldname == "vitality" && vit > 1) {
		vit--;
		divAtbVit.innerHTML = `VIT +${vit}`;
	}
	if (fieldname == "wisdom" && wis > 1) {
		wis--;
		divAtbWis.innerHTML = `WIS +${wis}`;
	}
	if (fieldname == "dexterity" && dex > 1) {
		dex--;
		divAtbDex.innerHTML = `DEX +${dex}`;
	}
	if (fieldname == "charisma" && cha > 1) {
		cha--;
		divAtbCha.innerHTML = `CHA +${cha}`;
	}
	counter = str + def + vit + wis + dex + cha;

	chart.data.datasets[0].data = [str, def, vit, wis, dex, cha];
	chart.update();
}

function add(fieldname) {
	if (fieldname == "strength" && counter < 35) {
		str++;
		divAtbStr.innerHTML = `STR +${str}`;
	}
	if (fieldname == "defense" && counter < 35) {
		def++;
		divAtbDef.innerHTML = `DEF +${def}`;
	}
	if (fieldname == "vitality" && counter < 35) {
		vit++;
		divAtbVit.innerHTML = `VIT +${vit}`;
	}
	if (fieldname == "wisdom" && counter < 35) {
		wis++;
		divAtbWis.innerHTML = `WIS +${wis}`;
	}
	if (fieldname == "dexterity" && counter < 35) {
		dex++;
		divAtbDex.innerHTML = `DEX +${dex}`;
	}
	if (fieldname == "charisma" && counter < 35) {
		cha++;
		divAtbCha.innerHTML = `CHA +${cha}`;
	}
	counter = str + def + vit + wis + dex + cha;

	chart.data.datasets[0].data = [str, def, vit, wis, dex, cha];
	chart.update();
}

function equipChange(fieldname) {
	var slotTop = document.getElementById("slotTop");
	var slotMiddle = document.getElementById("slotMiddle");
	var slotLower = document.getElementById("slotLower");
	var slotBottom = document.getElementById("slotBottom");

	if (fieldname == "Top1") {
		slotTop.innerHTML = `<img src="assets/img/armor/light/top.png"/>`;
	}
	if (fieldname == "Top2") {
		slotTop.innerHTML = `<img src="assets/img/armor/medium/top.png"/>`;
	}
	if (fieldname == "Top3") {
		slotTop.innerHTML = `<img src="assets/img/armor/heavy/top.png"/>`;
	}
	if (fieldname == "Middle1") {
		slotMiddle.innerHTML = `<img src="assets/img/armor/light/middle.png"/>`;
	}
	if (fieldname == "Middle2") {
		slotMiddle.innerHTML = `<img src="assets/img/armor/medium/middle.png"/>`;
	}
	if (fieldname == "Middle3") {
		slotMiddle.innerHTML = `<img src="assets/img/armor/heavy/middle.png"/>`;
	}
	if (fieldname == "Lower1") {
		slotLower.innerHTML = `<img src="assets/img/armor/light/lower.png"/>`;
	}
	if (fieldname == "Lower2") {
		slotLower.innerHTML = `<img src="assets/img/armor/medium/lower.png"/>`;
	}
	if (fieldname == "Lower3") {
		slotLower.innerHTML = `<img src="assets/img/armor/heavy/lower.png"/>`;
	}
	if (fieldname == "Bottom1") {
		slotBottom.innerHTML = `<img src="assets/img/armor/light/bottom.png"/>`;
	}
	if (fieldname == "Bottom2") {
		slotBottom.innerHTML = `<img src="assets/img/armor/medium/bottom.png"/>`;
	}
	if (fieldname == "Bottom3") {
		slotBottom.innerHTML = `<img src="assets/img/armor/heavy/bottom.png"/>`;
	}
}

var selectedWeapon;

function selectWeapon(fieldname) {
	var sword = document.getElementById("weapon1");
	var bow = document.getElementById("weapon2");
	var polearm = document.getElementById("weapon3");
	var wand = document.getElementById("weapon4");
	var dagger = document.getElementById("weapon5");
	var shield = document.getElementById("weapon6");

	sword.classList.remove("weapon");
	bow.classList.remove("weapon");
	polearm.classList.remove("weapon");
	wand.classList.remove("weapon");
	dagger.classList.remove("weapon");
	shield.classList.remove("weapon");

	if (fieldname == "sword") {
		sword.classList.add("weapon");
		selectedWeapon = "sword";
	}
	if (fieldname == "bow") {
		bow.classList.add("weapon");
		selectedWeapon = "bow";
	}
	if (fieldname == "polearm") {
		polearm.classList.add("weapon");
		selectedWeapon = "polearm";
	}
	if (fieldname == "wand") {
		wand.classList.add("weapon");
		selectedWeapon = "wand";
	}
	if (fieldname == "dagger") {
		dagger.classList.add("weapon");
		selectedWeapon = "dagger";
	}
	if (fieldname == "shield") {
		shield.classList.add("weapon");
		selectedWeapon = "shield";
	}
}

function reload() {
	window.location.reload();
}

function cadastrar() {
	var username = document.getElementById("iptName").value;
	var specie = document.getElementById("iptSpc").value;
	var slotTop = document.getElementById("iptTop").value;
	var slotMiddle = document.getElementById("iptMiddle").value;
	var slotLower = document.getElementById("iptLower").value;
	var slotBottom = document.getElementById("iptBottom").value;
	var idusuario = sessionStorage.getItem("idusuario");

	if (username && specie && slotTop && slotMiddle && slotLower && slotBottom && selectedWeapon) {
		fetch("/personagem/criar", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				idusuario: idusuario,
				nome: username,
				especie: specie,
				strength: str,
				defense: def,
				wisdom: wis,
				charisma: cha,
				vitality: vit,
				dexterity: dex,
				toparmor: slotTop,
				middlearmor: slotMiddle,
				lowerarmor: slotLower,
				bottomarmor: slotBottom,
				weapon: selectedWeapon,
			}),
		})
			.then(function (resposta) {
				console.log("resposta: ", resposta);

				if (resposta.ok) {
					alert("Personagem criado com sucesso!");

					setTimeout(() => {
						window.location = "profile.html";
					}, "2500");
				} else {
					throw "Houve um erro ao tentar criar o personagem!";
				}
			})
			.catch(function (resposta) {
				console.log(`#ERRO: ${resposta}`);
			});
	} else {
		console.log(username, specie, slotTop, slotMiddle, slotLower, slotBottom, selectedWeapon);
	}
}

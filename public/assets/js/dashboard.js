function onload() {
	var qtdPolearm;
	var qtdBow;
	var qtdSword;
	var qtdWand;
	var qtdDagger;
	var qtdShield;

	var qtdSylph;
	var qtdSalamander;
	var qtdGnome;
	var qtdUndine;
	var qtdCaitSith;
	var qtdImp;
	var qtdPooka;
	var qtdSpriggan;
	var qtdLeprechaun;

	var SylphColor = "rgba(156, 204, 108, 0.8)";
	var SalamanderColor = "rgba(192, 40, 64, 0.8)";
	var GnomeColor = "rgba(118, 92, 70, 0.8)";
	var UndineColor = "rgba(108, 208, 224, 0.8)";
	var CaitSithColor = "rgba(200, 163, 64, 0.8)";
	var ImpColor = "rgba(118, 103, 135, 0.8)";
	var PookaColor = "rgba(174, 222, 108, 0.8)";
	var SprigganColor = "rgba(44, 44, 44, 0.8)";
	var LeprechaunColor = "rgba(164, 162, 171, 0.8)";

	var population = document.getElementById("speciesChart").getContext("2d");
	var speciesPop = [qtdSylph, qtdSalamander, qtdGnome, qtdUndine, qtdCaitSith, qtdImp, qtdPooka, qtdSpriggan, qtdLeprechaun];

	spcChart = new Chart(population, {
		type: "pie",
		data: {
			labels: ["Sylph", "Salamander", "Gnome", "Undine", "CaitSith", "Imp", "Pooka", "Spriggan", "Leprechaun"],
			datasets: [
				{
					label: "",
					data: speciesPop,
					backgroundColor: [SylphColor, SalamanderColor, GnomeColor, UndineColor, CaitSithColor, ImpColor, PookaColor, SprigganColor, LeprechaunColor],
					borderWidth: 0,
				},
			],
		},
		options: {
			responsive: true,
			plugins: {
				legend: {
					display: true,
					position: "right",
				},
			},
		},
	});

	var weapons = [qtdPolearm, qtdBow, qtdSword, qtdWand, qtdDagger, qtdShield];

	var popularity = document.getElementById("popularityChart").getContext("2d");

	popChart = new Chart(popularity, {
		type: "bar",

		data: {
			labels: ["Polearm", "Bow", "Sword", "Wand", "Dagger", "Shield"],
			datasets: [
				{
					label: "",
					data: weapons,
					fill: true,
					backgroundColor: [SylphColor, SalamanderColor, GnomeColor, UndineColor, CaitSithColor, ImpColor, PookaColor, SprigganColor, LeprechaunColor],
					borderColor: "rgba(255, 255, 255, 0.8)",
					borderRadius: 10,
				},
			],
		},

		options: {
			responsive: true,
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				r: {
					ticks: {
						display: false,
					},
					pointLabels: {
						// padding: 1,
						display: false,
						color: "rgba(255, 255, 255, 0.8)",
						font: {
							size: 12,
							// style: "italic",
							lineHeight: 1.2,
							family: "aincrad-font",
							borderColor: "red",
						},
					},
				},
			},
		},
	});
	fetch("/dashboard/weapons", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(function (resposta) {
			console.log("resposta: ", resposta);

			if (resposta.ok) {
				resposta.json().then((json) => {
					console.log(json);
					qtdSword = json.sword || 0;
					qtdWand = json.wand || 0;
					qtdBow = json.bow || 0;
					qtdDagger = json.dagger || 0;
					qtdPolearm = json.polearm || 0;
					qtdShield = json.shield || 0;

					popChart.data.datasets[0].data = [qtdPolearm, qtdBow, qtdSword, qtdWand, qtdDagger, qtdShield];
					popChart.update();
				});
			} else {
				throw "Houve um erro ao tentar carregar a dashboard!";
			}
		})
		.catch(function (resposta) {
			console.log(`#ERRO: ${resposta}`);
		});

	fetch("/dashboard/species", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(function (resposta) {
			console.log("resposta: ", resposta);

			if (resposta.ok) {
				resposta.json().then((json) => {
					console.log(json);
					qtdSylph = json.Sylph || 0;
					qtdSalamander = json.Salamander || 0;
					qtdGnome = json.Gnome || 0;
					qtdUndine = json.Undine || 0;
					qtdCaitSith = json.Cait_Sith || 0;
					qtdImp = json.Imp || 0;
					qtdPooka = json.Pooka || 0;
					qtdSpriggan = json.Spriggan || 0;
					qtdLeprechaun = json.Leprechaun || 0;

					spcChart.data.datasets[0].data = [qtdSylph, qtdSalamander, qtdGnome, qtdUndine, qtdCaitSith, qtdImp, qtdPooka, qtdSpriggan, qtdLeprechaun];
					spcChart.update();
				});
			} else {
				throw "Houve um erro ao tentar carregar a dashboard!";
			}
		})
		.catch(function (resposta) {
			console.log(`#ERRO: ${resposta}`);
		});
}

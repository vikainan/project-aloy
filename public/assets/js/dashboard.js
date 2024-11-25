function onload() {
	var Sylph = "rgba(156, 204, 108, 0.6)";
	var Salamander = "rgba(192, 40, 64, 0.6)";
	var Gnome = "rgba(118, 92, 70, 0.6)";
	var Undine = "rgba(108, 208, 224, 0.6)";
	var CaitSith = "rgba(200, 163, 64, 0.6)";
	var Imp = "rgba(118, 103, 135, 0.6)";
	var Pooka = "rgba(174, 222, 108, 0.6)";
	var Spriggan = "rgba(44, 44, 44, 0.6)";
	var Leprechaun = "rgba(164, 162, 171, 0.6)";

	var qtdpolearm = (Math.random() * 10).toFixed(0);
	var qtdbow = (Math.random() * 10).toFixed(0);
	var qtdsword = (Math.random() * 10).toFixed(0);
	var qtdwand = (Math.random() * 10).toFixed(0);
	var qtddagger = (Math.random() * 10).toFixed(0);
	var qtdshield = (Math.random() * 10).toFixed(0);

	var weapons = [qtdpolearm, qtdbow, qtdsword, qtdwand, qtddagger, qtdshield];

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
					backgroundColor: [Sylph, Salamander, Gnome, Undine, CaitSith, Imp, Pooka, Spriggan, Leprechaun],
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

	var qtdSylph = (Math.random() * 10).toFixed(0);
	var qtdSalamander = (Math.random() * 10).toFixed(0);
	var qtdGnome = (Math.random() * 10).toFixed(0);
	var qtdUndine = (Math.random() * 10).toFixed(0);
	var qtdCaitSith = (Math.random() * 10).toFixed(0);
	var qtdImp = (Math.random() * 10).toFixed(0);
	var qtdPooka = (Math.random() * 10).toFixed(0);
	var qtdSpriggan = (Math.random() * 10).toFixed(0);
	var qtdLeprechaun = (Math.random() * 10).toFixed(0);

	var species = [qtdSylph, qtdSalamander, qtdGnome, qtdUndine, qtdCaitSith, qtdImp, qtdPooka, qtdSpriggan, qtdLeprechaun];
	var population = document.getElementById("speciesChart").getContext("2d");

	spcChart = new Chart(population, {
		type: "pie",
		data: {
			labels: ["Sylph", "Salamander", "Gnome", "Undine", "CaitSith", "Imp", "Pooka", "Spriggan", "Leprechaun"],
			datasets: [
				{
					label: "",
					data: species,
					backgroundColor: [Sylph, Salamander, Gnome, Undine, CaitSith, Imp, Pooka, Spriggan, Leprechaun],
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
}

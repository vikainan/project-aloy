function signin() {
	var cardSignin = document.getElementById("signin");
	var cardSignup = document.getElementById("signup");
	var buttonSignin = document.getElementById("btnSignin");
	var buttonSignup = document.getElementById("btnSignup");
	cardSignup.classList.add("hide");
	cardSignin.classList.remove("hide");
	buttonSignup.classList.remove("hide");
	buttonSignin.classList.add("hide");
}

function signup() {
	var cardSignin = document.getElementById("signin");
	var cardSignup = document.getElementById("signup");
	var buttonSignup = document.getElementById("btnSignup");
	var buttonSignin = document.getElementById("btnSignin");
	cardSignup.classList.remove("hide");
	cardSignin.classList.add("hide");
	buttonSignup.classList.add("hide");
	buttonSignin.classList.remove("hide");
}

function cadastrar() {
	var username = document.getElementById("iptName").value;
	var userpwd = document.getElementById("iptPwd").value;
	var userpwdRpt = document.getElementById("iptPwdRepeat").value;
	var useremail = document.getElementById("iptEmail").value;
	var msg = "";
	var painel = document.getElementById("painel");

	var symbol = "!@#$%&*()¨.";
	var numbers = "0123456789";

	var pwdUpper = userpwd.toUpperCase();
	var pwdLower = userpwd.toLowerCase();

	var isUserValid;
	var isPwdValid;

	var indexCom = useremail.indexOf(".com");
	var indexAt = useremail.indexOf("@");

	if (username) {
		var hasSymbol = false;
		for (var index = 0; index < username.length; index++) {
			if (symbol.includes(username[index])) {
				hasSymbol = true;
			}
		}
		if (hasSymbol || username.length < 6) {
			msg += `Nome de usuário inválido. Verifique os caracteres utilizados.<br>`;
			isUserValid = false;
			painel.innerHTML = msg;
		} else {
			isUserValid = true;
		}
	} else {
		msg += `Nome de usuário inválido. Verifique os caracteres utilizados.<br>`;
		isUserValid = false;
		painel.innerHTML = msg;
	}

	if (indexAt > indexCom || !(useremail.includes("@") && useremail.includes(".com"))) {
		msg += `Email inválido.<br>`;
		isUserValid = false;
		painel.innerHTML = msg;
	}

	if (userpwd) {
		var hasSymbol = false;
		var hasNumber = false;
		for (var index = 0; index < userpwd.length; index++) {
			if (symbol.includes(userpwd[index])) {
				hasSymbol = true;
			}
			if (numbers.includes(userpwd[index])) {
				hasNumber = true;
			}
		}

		if (userpwd.length < 8 || hasSymbol == false || hasNumber == false || userpwd == pwdUpper || userpwd == pwdLower) {
			msg += `A senha deve conter no mínimo 8 caracteres
				com ao menos um caractere especial,
				uma letra maiúscula, uma letra minúscula e um número.<br>`;
			isPwdValid = false;
			painel.innerHTML = msg;
		} else if (userpwd != userpwdRpt) {
			msg += `Confirme sua senha.<br>`;
			isPwdValid = false;
			painel.innerHTML = msg;
		} else {
			isPwdValid = true;
		}
	} else {
		msg += `A senha deve conter no mínimo 8 caracteres
				com ao menos um caractere especial,
				uma letra maiúscula, uma letra minúscula e um número.<br>`;
		isPwdValid = false;
		painel.innerHTML = msg;
	}

	if (isUserValid && isPwdValid) {
		// cadastrar no banco de dados
		fetch("/usuarios/cadastrar", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				// crie um atributo que recebe o valor recuperado aqui
				// Agora vá para o arquivo routes/usuario.js
				nome: username,
				email: useremail,
				senha: userpwd,
			}),
		})
			.then(function (resposta) {
				console.log("resposta: ", resposta);

				if (resposta.ok) {
					painel.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

					setTimeout(() => {
						signin();
					}, "5000");
				} else {
					throw "Houve um erro ao tentar realizar o cadastro!";
				}
			})
			.catch(function (resposta) {
				console.log(`#ERRO: ${resposta}`);
			});
	}
	painel.classList.remove("hide");
}

function acessar() {
	var user = document.getElementById("iptNameLogin").value;
	var userpwd = document.getElementById("iptPwdLogin").value;
	console.log(user, userpwd);

	if (user && userpwd) {
		fetch("/usuarios/autenticar", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				// crie um atributo que recebe o valor recuperado aqui
				// Agora vá para o arquivo routes/usuario.js
				username: user,
				senha: userpwd,
			}),
		})
			.then(function (resposta) {
				console.log("resposta: ", resposta);

				if (resposta.ok) {
					resposta.json().then((json) => {
						console.log(json);
						sessionStorage.setItem("idusuario", json[0].idusuario);
					});

					sessionStorage.setItem("auth", "true");
					painel.innerHTML = `
					<span style="color: rgba(0, 175, 0, 0.75)">
					Login realizado com sucesso!
					Redirecionando para criação de personagem</span>`;

					setTimeout(() => {
						window.location = "creator.html";
					}, "2500");
				} else {
					throw "Houve um erro ao tentar realizar o login!";
				}
			})
			.catch(function (resposta) {
				console.log(`#ERRO: ${resposta}`);
			});
	}
	painel.classList.remove("hide");
}

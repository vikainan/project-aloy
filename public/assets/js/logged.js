function logged() {
	var auth = sessionStorage.getItem("auth");
	var noUser = document.getElementById("noUser");
	var authUser = document.getElementById("authUser");
	var link = document.getElementById("creator");

	if (auth == "true") {
		noUser.classList.add("hide");
		authUser.classList.remove("hide");
		link.setAttribute("href", "creator.html");
	} else {
		noUser.classList.remove("hide");
		authUser.classList.add("hide");
		link.setAttribute("href", "signin.html");
	}
}

function signout() {
	sessionStorage.removeItem("auth");
}

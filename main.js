const form = document.getElementById("form");
const email = document.getElementById("email-address");
const emailConfirm = document.getElementById("confirm-email-address");
const userName = document.getElementById("profile-name");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const dataConsent = document.getElementById("data-consent");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const emailValue = email.value.trim();
	const emailConfirmValue = emailConfirm.value.trim();
	const userNameValue = userName.value.trim();
	const passwordValue = password.value.trim();
	const passwordConfirmValue = passwordConfirm.value.trim();
	const dataConsentValue = dataConsent.value.trim();

	if (emailValue === "") {
		setErrorFor(email, "You need to enter your email.");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "This email is invalid. Make sure it's written like example@example.com");
	} else {
		setSuccessFor(email);
	}

	if (emailConfirmValue ==="") {
		setErrorFor(emailConfirm, "You need to confirm your email");
	} else if (emailConfirmValue !== emailValue) {
		setErrorFor(emailConfirm, "This email addresses don't match.");
	} else {
		setSuccessFor(emailConfirm)
	}

	if (userNameValue === "") {
		setErrorFor(userName, "Please choose a user name.");
	} else {
		setSuccessFor(userName);
	}

	if (passwordValue === "") {
		setErrorFor(password, "Please enter a valid password");
	} // TODO set stipulations for password (e.g. must have uppercase etc.)
	else {
		setSuccessFor(password);
	}

	if (passwordConfirmValue === "") {
		setErrorFor(passwordConfirm, "Please enter a valid password");
	} else if (passwordConfirmValue !== passwordValue) {
		setErrorFor(passwordConfirm, "Password does not match");
	}	else {
		setSuccessFor(passwordConfirm);
	}

	// TODO show a success message
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "form-control error";
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

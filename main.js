// Password strength
let strength = {
	0: "Worst",
	1: "Bad",
	2: "Weak",
	3: "Good",
	4: "Strong",
};

const password = document.getElementById("password");
const meter = document.getElementById("password-strength-meter");
const text = document.getElementById("password-strength-text");

password.addEventListener("input", function () {
	let val = password.value;
	let result = zxcvbn(val);

	// Update the password strength meter
	meter.value = result.score;

	// Update the text indicator
	if (val !== "") {
		text.innerHTML = "Strength: " + strength[result.score];
	} else {
		text.innerHTML = "";
	}
});

// Form field validation
const form = document.getElementById("form");
const email = document.getElementById("email-address");
const emailConfirm = document.getElementById("confirm-email-address");
const userName = document.getElementById("profile-name");
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

	if (emailValue === "") {
		setErrorFor(email, "You need to enter your email.");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "This email is invalid. Make sure it's written like example@example.com");
	} else {
		setSuccessFor(email);
	}

	if (emailConfirmValue === "") {
		setErrorFor(emailConfirm, "You need to confirm your email");
	} else if (emailConfirmValue !== emailValue) {
		setErrorFor(emailConfirm, "This email addresses don't match.");
	} else {
		setSuccessFor(emailConfirm);
	}

	if (userNameValue === "") {
		setErrorFor(userName, "Please choose a user name.");
	} else {
		setSuccessFor(userName);
	}

	if (passwordValue === "") {
		setErrorFor(password, "Please enter a valid password");
	} else {
		setSuccessFor(password);
	}

	if (passwordConfirmValue === "") {
		setErrorFor(passwordConfirm, "Please enter a valid password");
	} else if (passwordConfirmValue !== passwordValue) {
		setErrorFor(passwordConfirm, "Password does not match");
	} else {
		setSuccessFor(passwordConfirm);
	}
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

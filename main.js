var email = document.querySelector("#mail");
var error = document.querySelector("#error");

const emailValidation = () => {
	if (email.value !== "")
	{
		if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
		{
			error.innerHTML = "please enter a valid email";
			error.style.color = "red";
			return false;
		}
		else {
			error.innerHTML = "Email Available";
			error.style.color = "#00BC15";
			return true;
		}
	}
}
const form = document.getElementById("form");
const username = document.getElementById("your Sin");
const email = document.getElementById("tell Me");
const passowrd = document.getElementById("encryption");
const passowrd2 = document.getElementById("retype Encryption");

//show success Function
function showSucess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//show error Function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//function to email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSucess(input);
  } else {
    showError(input, "You are lying");
  }
}
//Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} character`
    );
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} has exceded ${max} characters`);
  } else {
    showSucess(input);
  }
}
//CheckRequired
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() == "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucess(input);
    }
  });
}
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, passowrd2, passowrd, email]);
  checkLength(username, 3, 1000);
  checkLength(passowrd, 6, 25);
  checkEmail(email);
});

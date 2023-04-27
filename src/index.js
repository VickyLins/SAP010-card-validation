import validator from './validator.js';

console.log(validator);

const userNumInput = document.getElementById("userNum");
const cardNumber = document.getElementById("card-Num");
const formSubmit = document.getElementById("form");

userNumInput.oninput = function (event) {  //oninput puxa o valor do input
  cardNumber.innerText = event.target.value //mostra o valor do input na div do cartão
  console.log(event.target.value)
};

formSubmit.onsubmit = function (event) {
  event.preventDefault();
  const validate_card_number = userNumInput.value 
  console.log (validate_card_number)
  const validNumber = validator.isValid(validate_card_number)

  if (validNumber === true) {
    alert("O número do cartão digitado é valido!")
  } else {
    alert("O número do cartão digitado não é válido! Digite novamente, por favor")
  }
  const maskedNumber = validator.maskify(validate_card_number)
  cardNumber.innerText = maskedNumber
};
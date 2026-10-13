
// 3 and under you are free
// name is type and enter
//
// error message when there is no number and name

const inputElem = document.getElementById("number");
const num = Number(inputElem.value);
const outputElem = document.getElementById("message");
const MyButton = document.getElementById('submitButton');

MyButton.addEventListener('click', function() {
event.preventDefault()
  document.getElementById('message').innerText = "Try again!"
})


function submitButton() {

  if (num < 4 && num >=0) {
    outputElem.textContent = "Your ticket is free!";
  } else if (num < 13 && num >=4) {
    outputElem.textContent = "Your ticket is $10!";
  } else if (num < 65 && num >= 13) {
    outputElem.textContent = "Your ticket is $20!";
  }  else if (num < 100 && num >= 65) {
  outputElem.textContent = "Your ticket is $12!";
}
}

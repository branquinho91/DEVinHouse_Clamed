const inputNumber1 = document.getElementById("inputNumber1");
const inputNumber2 = document.getElementById("inputNumber2");
const calculateButton = document.getElementById("calculateButton");
const resultSpan = document.getElementById("resultSpan");

calculateButton.addEventListener("click", sum);

function sum(event) {
  event.preventDefault();
  const result = Number(inputNumber1.value) + Number(inputNumber2.value);
  resultSpan.innerHTML = `Result: <strong>${result}</strong>`;
}

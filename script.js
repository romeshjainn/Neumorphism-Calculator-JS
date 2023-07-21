// Function to add the clicked value/operator to the calculation display
function addToCalculation(value) {
  const calculationDisplay = document.getElementById("calculation");
  calculationDisplay.textContent += value;
}

// Function to calculate the result
function calculate() {
  const calculationDisplay = document.getElementById("calculation");
  const resultDisplay = document.getElementById("result");

  try {
    const result = eval(calculationDisplay.textContent);
    resultDisplay.textContent = "= " + result;
  } catch (error) {
    resultDisplay.textContent = "= Error";
  }
}

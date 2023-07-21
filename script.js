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

// Function to initialize the calculator
function initializeCalculator() {
  const buttons = document.querySelectorAll(
    '.buttons-container input[type="button"]'
  );
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;
      if (value === "=") {
        calculate();
      } else {
        addToCalculation(value);
      }
    });
  });
}

// Call the initializeCalculator function when the DOM is loaded
document.addEventListener("DOMContentLoaded", initializeCalculator);

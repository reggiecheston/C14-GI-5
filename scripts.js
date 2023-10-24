const displayOutput = document.querySelector(".display--output");
const button = document.querySelectorAll(".grid__item--button");
let output = "";

calculate = (btnValue) => {
  // output
  if (btnValue === "=" && output !== "") {
    // converts to a percentage
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "C") {
    // Clears display
    output = "";
  } else if (btnValue === "DEL") {
    // Deletes last character
    output = output.toString().slice(0, -1);
  } else {
    output += btnValue;
  }

  // Handles dividing by 0
  if (output == "Infinity") {
    output = "undefined";
  }

  displayOutput.value = output;
};

// add event listener to buttons
button.forEach((button) => {
  // button click calls calculate()
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

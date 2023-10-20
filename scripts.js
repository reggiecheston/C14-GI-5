const displayOutput = document.querySelector(".display--output");
const button = document.querySelectorAll(".grid__item--button");
let special = ["%", "/", "*", "-", "+","="];
let output = "";

const calculate = (btnValue) => {

    if(btnValue === "="  && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if(btnValue === "C") {
        output = "";
    } else if(btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && special.includes(btnValue)) return;
        output += btnValue;
    }

    if (output == "Infinity") {
        output = "undefined";
    }

    displayOutput.value = output;
    
}


// add event listener to buttons
button.forEach((button) => {
    // button click calls calculate() (change console.log to calculate)
    button.addEventListener("click", e => calculate(e.target.dataset.value));
})

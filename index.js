//grab elements from the DOM
const number = document.getElementById("numberBox");
const goButton = document.getElementById("go-btn");
const result = document.getElementById("resultDiv");
const renderResult = document.createElement("p");

//get the square root of the number the user enters

function getSquareRoot(num) {
    renderResult.innerHTML = "";
    renderResult.innerHTML = Math.sqrt(num);
    result.appendChild(renderResult);
}

console.log(getSquareRoot(number.value));
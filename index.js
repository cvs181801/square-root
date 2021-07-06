//grab elements from the DOM

const number1 = document.getElementById("numberBox1");
const number2 = document.getElementById("numberBox2");
const number3 = document.getElementById("numberBox3");
const number4 = document.getElementById("numberBox4");
const number5 = document.getElementById("numberBox5");

const goButton = document.getElementById("go-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("resultDiv");
let renderResult = document.createElement("p");

//get the square root of each the number the user enters.

function getSquareRoot(numbers) {
    result.innerHTML = "";
    clearButton.classList.toggle("hidden");
    goButton.classList.toggle("hidden");
    for (let i = 0; i<numbers.length; i++) {
        let renderResult = document.createElement("p");
        
        renderResult.innerHTML = `The Square Root of ${numbers[i]} is ${Math.sqrt(numbers[i])}`;
        result.append(renderResult);
    }
}

//create a way to clear the previous values.

function clearArray(numbers) {
     clearButton.classList.toggle("hidden");
     goButton.classList.toggle("hidden");
   
    for (let i = numbers.length - 1; i > 0; i--) {
        //paragraphs = document.getElementsByTagName("p");
        //paragraphs.innerHTML = "";
        //numbers.splice(0, 1);
        result.innerHTML = "";
    }
   
}

//make the 'go' button work
goButton.addEventListener('click', function(e) {
    e.preventDefault();
    return getSquareRoot([parseInt(number1.value), parseInt(number2.value), parseInt(number3.value), parseInt(number4.value), parseInt(number5.value)]);
})

//make the clear button work
clearButton.addEventListener('click', function(e) {
    e.preventDefault();
    return clearArray([parseInt(number1.value), parseInt(number2.value), parseInt(number3.value), parseInt(number4.value), parseInt(number5.value)]);
})
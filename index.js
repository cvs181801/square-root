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

//get the square root of each the number the user enters, then sum up the total

function getSquareRoot(numbers) {
    clearButton.classList.toggle("hidden");
    goButton.classList.toggle("hidden");
    for (let i = 0; i<numbers.length; i++) {
        let renderResult = document.createElement("p");
        //renderResult.innerHTML = "";
        renderResult.innerHTML = `The Square Root of ${numbers[i]} is ${Math.sqrt(numbers[i])}`;
        result.append(renderResult);
        //console.log(Math.sqrt(numbers[i]));
    }
}

function clearArray(numbers) {
    // console.log(numbers);
    // numbers.splice(0);
     clearButton.classList.toggle("hidden");
     goButton.classList.toggle("hidden");
    // return numbers;
    for (let i = 0; i < numbers.length; i++) {
        p.innerHTML = "";

        //numbers.splice(0);
    }
}
// const array1 = [4, 4, 4, 4];
// console.log(array1);
// console.log(clearArray(array1));
//console.log(getSquareRoot([parseInt(number1.value), parseInt(number2.value), parseInt(number3.value), parseInt(number4.value), parseInt(number5.value)]));

goButton.addEventListener('click', function(e) {
    e.preventDefault();
    //console.log("go button worked!!");
    return getSquareRoot([parseInt(number1.value), parseInt(number2.value), parseInt(number3.value), parseInt(number4.value), parseInt(number5.value)]);
})

clearButton.addEventListener('click', function(e) {
    e.preventDefault();
    //console.log("clear button worked!!");
    return clearArray([parseInt(number1.value), parseInt(number2.value), parseInt(number3.value), parseInt(number4.value), parseInt(number5.value)]);
})
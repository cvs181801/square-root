//grab elements from the DOM
const number1 = document.getElementById("numberBox1");
const number2 = document.getElementById("numberBox2");
const number3 = document.getElementById("numberBox3");
const number4 = document.getElementById("numberBox4");
const number5 = document.getElementById("numberBox5");

const goButton = document.getElementById("go-btn");
const result = document.getElementById("resultDiv");
let renderResult = document.createElement("p");

//get the square root of each the number the user enters, then sum up the total

function getSquareRoot(numbers, number) {
    for (let i = 0; i<numbers.length; i++) {
        //renderResult.remove("p");
        let renderResult = document.createElement("p");
        renderResult.innerHTML = "";
        renderResult.innerHTML = `The Square Root of ${number} is ${Math.sqrt(number)}`;
        result.append(renderResult);
        console.log(Math.sqrt([i]));
    }
}

//console.log(getSquareRoot([9, 5, 7, 4]));

goButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("it worked!!");
    return getSquareRoot([parseInt(number1.value), parseInt(number2.value), parseInt(number3.value), parseInt(number4.value), parseInt(number5.value)]);
})
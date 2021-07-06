//grab elements from the DOM
// const number = document.getElementById("numberBox");
// const goButton = document.getElementById("go-btn");
// const result = document.getElementById("resultDiv");
// const renderResult = document.createElement("p");

//get the square root of each the number the user enters, then sum up the total

function getSquareRoot(numbers) {
    for (let i = 0; i<numbers.length; i++) {
        //renderResult.innerHTML = "";
        //renderResult.innerHTML = Math.sqrt([i]);
        //result.append(renderResult);
        console.log(Math.sqrt([i]));
    }
   
}

console.log(getSquareRoot([9, 5, 7, 4]));

// goButton.addEventListener('click', function(e) {
//     e.preventDefault();
//     return getSquareRoot(number.value);
// })
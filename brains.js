//Dummy variables
let disp = "";
let screen = document.getElementById("display");
let answer = 0;

//Functions
const makeItWork = val => {
    disp += val;
    screen.textContent = disp;
}

const resetDisplay = () => {
    screen.textContent = "0";
    disp = "";
    answer = 0;
}

const calculate = () => {
    let arr = disp.split(" ");
    console.log(arr);
    
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "×":
                if (answer === 0) {
                    answer = Number(arr[i-1]) * Number(arr[i+1]);
                } else {
                    answer *= Number(arr[i+1]);
                };
                break;
            case "÷":
                if (answer === 0) {
                    answer = Number(arr[i-1]) / Number(arr[i+1]);
                } else {
                    answer /= Number(arr[i+1]);
                };
                break;
            case "+":
                if (answer === 0) {
                    answer = Number(arr[i-1]) + Number(arr[i+1]);
                } else {
                    answer += Number(arr[i+1]);
                };
                break;
            case "−":
                if (answer === 0) {
                    answer = Number(arr[i-1]) - Number(arr[i+1]);
                } else {
                    answer -= Number(arr[i+1]);
                };
                break;
        }
    }
    
    screen.textContent = answer;
}

const divideF = (num1, num2) => num1 / num2;
const multiplyF = (num1, num2) => num1 * num2;
const addF = (num1, num2) => num1 + num2;
const minusF = (num1, num2) => num1 - num2;

//potential problem, backspace button only has keycode, not charcode
//check keypress works for backspace button, otherwise change to keydown
//const keyBoard = (event) => {

//};

//Event Listeners

    //document.addEventListener("keypress", keyBoard);
    document.getElementById("zero").addEventListener("click", () => makeItWork("0"));
    document.getElementById("one").addEventListener("click", () => makeItWork("1"));
    document.getElementById("two").addEventListener("click", () => makeItWork("2"));
    document.getElementById("three").addEventListener("click", () => makeItWork("3"));
    document.getElementById("four").addEventListener("click", () => makeItWork("4"));
    document.getElementById("five").addEventListener("click", () => makeItWork("5"));
    document.getElementById("six").addEventListener("click", () => makeItWork("6"));
    document.getElementById("seven").addEventListener("click", () => makeItWork("7"));
    document.getElementById("eight").addEventListener("click", () => makeItWork("8"));
    document.getElementById("nine").addEventListener("click", () => makeItWork("9"));
    document.getElementById("delete").addEventListener("click", resetDisplay);
    document.getElementById("divide").addEventListener("click", () => makeItWork(" ÷ "));
    document.getElementById("multiply").addEventListener("click", () => makeItWork(" × "));
    document.getElementById("add").addEventListener("click", () => makeItWork(" + "));
    document.getElementById("decimal").addEventListener("click", () => makeItWork("."));
    document.getElementById("equals").addEventListener("click", calculate);
//might need a special case for -ve  numbers and include an if statement somewhere
    document.getElementById("minus").addEventListener("click", () => makeItWork(" − "));



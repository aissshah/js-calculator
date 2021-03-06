//Dummy variables
let disp = "";
let screen = document.getElementById("display");
let answer = 0;
let lastInput = "";
let decimalUsed = false;
let startNum = true;

//Functions
const makeItWork = val => {
    //condition for multiple operators
    if ((lastInput == " × " || lastInput == " ÷ " || lastInput == " + " || lastInput == " − ")) {
        decimalUsed = false;
        startNum = true;
        if (val == " × " || val == " ÷ " || val == " + ") {
            let tempdisp = disp.substring(0, disp.length - 3);
            disp = tempdisp;
        }
    }

    // attempting to address the instance of +.+
    // if (lastInput == ".") && (val == " × " || val == " ÷ " || val == " + " || val == " − ") {
    //     do nothing here. Bad practice - find another way
    // }

    //condition for decimals
    if (val == ".") {
        if (!decimalUsed) {
            if (startNum && disp == "") {
                disp = "0";
            }
            decimalUsed = true;
            disp += val
            screen.textContent = disp;
            lastInput = val;
        }
    } else if (startNum && lastInput == "0" && val == "0") {
        disp = "";
    } else {
        disp += val
        screen.textContent = disp;
        lastInput = val;
    }

    if (val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9" || val == ".") {
        startNum = false;
    }
}

const resetDisplay = () => {
    screen.textContent = "0";
    disp = "";
    answer = 0;
    lastInput = "";
    startNum = true;
    decimalUsed = false;
}

const calculate = () => {
    let arr = disp.split(" ");
    //line below filters empty elements
    arr = arr.filter(em => em);

    if (arr.length === 1) {
        answer = Number(disp);
    }

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "×":
                if (arr[i+1] == "−") {
                    if (answer === 0) {
                        answer = Number(arr[i-1]) * -(Number(arr[i+2]));
                    } else {
                        answer *= -Number(arr[i+2]);
                    };
                } else {
                    if (answer === 0) {
                        answer = Number(arr[i-1]) * Number(arr[i+1]);
                    } else {
                        answer *= Number(arr[i+1]);
                    };
                };
                break;
            case "÷":
                if (arr[i+1] == "−") {
                    if (answer === 0) {
                        answer = Number(arr[i-1]) / -Number(arr[i+2]);
                    } else {
                        answer /= -Number(arr[i+2]);
                    };
                } else {
                    if (answer === 0) {
                        answer = Number(arr[i-1]) / Number(arr[i+1]);
                    } else {
                        answer /= Number(arr[i+1]);
                    };
                };
                break;
            case "+":
                if (arr[i+1] == "−") {
                    if (answer === 0) {
                        answer = Number(arr[i-1]) + -Number(arr[i+2]);
                    } else {
                        answer += -Number(arr[i+2]);
                    };
                } else {
                    if (answer === 0) {
                        answer = Number(arr[i-1]) + Number(arr[i+1]);
                    } else {
                        answer += Number(arr[i+1]);
                    };
                };
                break;
            case "−":
                if (arr[i+1] == "−") {
                    if (answer === 0) {
                        answer = Number(arr[i-1]) - -Number(arr[i+2]);
                    } else {
                        answer -= -Number(arr[i+2]);
                    };
                } else {
                    if (arr[i-1] == "×" || arr[i-1] === "÷" || arr[i-1] === "+" || arr[i-1] === "−") {
                        break;
                    } else if (i === 0) {
                        answer = - Number(arr[i+1]);
                    } else if (answer === 0) {
                        answer = Number(arr[i-1]) - Number(arr[i+1]);
                    } else {
                        answer -= Number(arr[i+1]);
                    };
                };
                break;
        }
    }
    
    screen.textContent = answer;
    disp = answer;
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



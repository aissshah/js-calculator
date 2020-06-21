//Event Listeners
document.addEventListener("keypress", keyBoard);
document.getElementById("zero").addEventListener("click", makeItWork(0));
document.getElementById("one").addEventListener("click", makeItWork(1));
document.getElementById("two").addEventListener("click", makeItWork(2));
document.getElementById("three").addEventListener("click", makeItWork(3));
document.getElementById("four").addEventListener("click", makeItWork(4));
document.getElementById("five").addEventListener("click", makeItWork(5));
document.getElementById("six").addEventListener("click", makeItWork(6));
document.getElementById("seven").addEventListener("click", makeItWork(7));
document.getElementById("eight").addEventListener("click", makeItWork(8));
document.getElementById("nine").addEventListener("click", makeItWork(9));
//document.getElementById("delete").addEventListener("click", makeItWork);
document.getElementById("divide").addEventListener("click", makeItWork(/));
document.getElementById("multiply").addEventListener("click", makeItWork(*));
document.getElementById("minus").addEventListener("click", makeItWork(-));
document.getElementById("add").addEventListener("click", makeItWork(+));

//Functions
const makeItWork = val => {

};

//potential problem, backspace button only has keycode, not charcode
//check keypress works for backspace button, otherwise change to keydown
const keyBoard = (event) => {

};


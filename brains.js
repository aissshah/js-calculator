//Event Listeners
//document.getElementById("zero").addEventListener("click", makeItWork);
//document.getElementById("zero").addEventListener("click", makeItWork);

//Functions
const makeItWork = () => {

};

function uniCharCode(event) {
    var char = event.which || event.keyCode;
    document.getElementById("demo").innerHTML = "Unicode CHARACTER code: " + char;
  }
  
  function uniKeyCode(event) {
    var key = event.keyCode;
    document.getElementById("demo2").innerHTML = "Unicode KEY code: " + key;
  }
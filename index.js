var userInput = document.querySelector("#user-input");
var btnHeading1 = document.querySelector("#btn-heading1");
var btnHeading2 = document.querySelector("#btn-heading2");
var btnHeading3 = document.querySelector("#btn-heading3");
var output = document.querySelector("#output"); 
btnHeading1.addEventListener("click", h1)
function h1() {
    userInput.style.fontSize = "25px";
}
btnHeading2.addEventListener("click", h2)
function h2() {
    userInput.style.fontSize = "15px";
}
btnHeading3.addEventListener("click", h3)
function h3() {
    userInput.style.fontSize = "10px";
}


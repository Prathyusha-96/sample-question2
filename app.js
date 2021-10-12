const text = document.querySelector("#text");
const btnRed = document.querySelector("#btn-red");
const btnGreen = document.querySelector("#btn-green");
const btnBlue = document.querySelector("#btn-blue");
const colors = ["red", "green", "blue"]
btnRed.addEventListener("click", function () {
    const randomNumber = 0;
    text.style.color = colors[randomNumber];
});
btnGreen.addEventListener("click", function () {
    const randomNumber = 1;
    text.style.color = colors[randomNumber];
});
btnBlue.addEventListener("click", function () {
    const randomNumber = 2;
    text.style.color = colors[randomNumber];
});



    


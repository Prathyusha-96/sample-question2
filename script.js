var text = document.querySelector("#text");
var btnIncrease = document.querySelector("#btn-increase");
var btnDecrease = document.querySelector("#btn-decrease");

let number = 16;
btnIncrease.addEventListener("click", ()=>{
 number+= 2;
 text.style.fontSize = `${number}px`
});
btnDecrease.addEventListener("click", ()=>{
    number-= 2;
    text.style.fontSize = `${number}px`
   });


    

var zomato = document.querySelector('.zomato');
var swiggy = document.querySelector('.swiggy');

var ref = 0;

zomato.addEventListener('click',()=>{
    if (swiggy.classList.contains('highlight')){
        swiggy.classList.remove('highlight');
        zomato.classList.add('highlight');
        zomato.style.opacity = "1";
        swiggy.style.opacity = "0.5";
    } else{
        zomato.classList.add('highlight');
        zomato.style.opacity = "1";
        swiggy.style.opacity = "0.5";
    }
})

swiggy.addEventListener('click',()=>{
    if (zomato.classList.contains('highlight')){
        zomato.classList.remove('highlight');
        swiggy.classList.add('highlight');
        zomato.style.opacity = "0.5";
        swiggy.style.opacity = "1";

    } else{
        swiggy.classList.add('highlight');
        zomato.style.opacity = "0.5";
        swiggy.style.opacity = "1";
    }
})

document.querySelector(".prev").onclick = function () {
    location.href = "/type.html";
};
document.querySelector(".next").onclick = function () {
    location.href = "/delivery.html";
};
document.querySelector(".bruhh").onclick = function () {
    location.href = "/details.html";
};
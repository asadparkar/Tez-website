$(window).on("load",function(){
    $(".preloader").fadeOut("slow");
})

var dashboard = document.querySelector('.fa-user-circle');
var extended = document.querySelector('.dashboard');
var dashboard_content = document.querySelector('.first-dashboard-content');
var dashboard_content1 = document.querySelector('.second-dashboard-content');
var profile = document.querySelector('.profile-container');


dashboard.addEventListener('click',()=>{
    extended.style.width = "220px";
    extended.style.height = "380px";
    extended.style.top = "0";
    extended.style.right = "0";
    dashboard.style.position = "absolute";
    dashboard.style.zIndex = "106";
    dashboard.style.transform = "translateX(-120px)";
    dashboard.style.fontSize = "4rem";
    dashboard_content.style.transform = "translateX(0px)";
    dashboard_content1.style.transform = "translateX(0px)";
})

var profileclose = document.querySelector('.close-profile');


profileclose.addEventListener('click',()=>{
    extended.style.width = "0px";
    extended.style.height = "0px";
    dashboard.style.fontSize = "35px";
    dashboard.style.transform = "translatex(-29px)";
})

profileclose.addEventListener('click',()=>{
    $('#home,#login,#login-page,#logindetails,#select,#details,#runner,#order').css("filter","blur(0px)");
})

var navi = document.querySelector('#btn');
navi.addEventListener('click',()=>{
    $('#home,#login,#login-page,#logindetails,#select,#details,#runner,#order').css("filter","blur(3px)");
})

var remove = document.querySelector('#cancel');
remove.addEventListener('click',()=>{
    $('#home,#login,#login-page,#logindetails,#select,#details,#runner,#order').css("filter","blur(0px)");
})

var dashon = document.querySelector('#user')
dashon.addEventListener('click',()=>{
    $('#home,#login,#login-page,#logindetails,#select,#details,#runner,#order').css("filter","blur(3px)");
})


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



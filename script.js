const btn=document.querySelector(".btn");
const header=document.querySelector(".header");
const parent=document.querySelector(".parent");
const menu=document.querySelector(".menu");
const stick=document.querySelectorAll(".btn-stick");

btn.addEventListener("click",()=>{
    menu.classList.toggle("open");
    parent.classList.toggle("open");
    header.classList.toggle("open");
    stick[0].classList.toggle("open");
    stick[1].classList.toggle("open");
});
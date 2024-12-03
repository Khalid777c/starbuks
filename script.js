// selctions //


const navbar = document.querySelector('.navbar');
const bars = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');
const humburgerMenu = document.querySelector('.humburger');

humburgerMenu.addEventListener("click",()=>{
    bars.classList.toggle('active');
    xmark.classList.toggle('active');
    navbar.classList.toggle('active');
})



btn1.onclick=function(){
    this.style.background='transparent'
    this.style.color='#017143'
    text.innerText='The first drink offered by Starbucks was simply roasted coffee. Over time, they expanded their offerings to include various drinks such as lattes, cappuccinos, and seasonal specialty drinks.'
}
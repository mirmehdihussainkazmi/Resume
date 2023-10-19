let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navlist = document.querySelector('.nav-list');
let rightnav = document.querySelector('.rightnav');


burger.addEventListener('click', ()=>{
  rightnav.classList.toggle('v-class-resp');
  navlist.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');


})
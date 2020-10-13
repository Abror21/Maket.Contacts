const burger_icon = document.querySelector('.burger_icon');
const menu_wrapper = document.querySelector('.menu_wrapper');
const menu = document.querySelector('.menu');
const close_icon = document.querySelector('.close_icon');
const body = document.querySelector('body');

burger_icon.addEventListener('click', function(){
    menu.classList.toggle('active');
    menu_wrapper.style.display = 'block';
    body.style.overflow = 'hidden';
})

menu_wrapper.addEventListener('click', function(){
    menu.classList.toggle('active');
    menu_wrapper.style.display = 'none';
    body.style.overflow = 'visible';
})

close_icon.addEventListener('click', function(){
    menu.classList.toggle('active');
    menu_wrapper.style.display = 'none';
})
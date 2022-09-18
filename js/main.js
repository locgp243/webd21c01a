const btn__mobile = document.querySelector('.menu__mobile');
const menu = document.querySelector('.header__menu')

btn__mobile.onclick = function(){
    menu.classList.toggle('open');
    console.log('hêlo')
}
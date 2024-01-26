var showMenuBtn = document.querySelector('.second_header .second_header_right .menu_icon_div');
var closeMenuBtn = document.querySelector('.mobile_menu .mobile_menu_top .cross_btn');
var mobileMenu = document.querySelector('.mobile_menu');

showMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.add('show_mobile_menu');
});

closeMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('show_mobile_menu');
});


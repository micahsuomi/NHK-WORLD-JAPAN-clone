
const openButton = document.getElementById('open-button');
const openDropDown = document.querySelector('.dropdown-menu-container');
const exitDropDown = document.querySelector('.dropdown-menu-top-exit');


openButton.addEventListener('click', function() {
    openDropDown.classList.toggle('hide');

}) 

exitDropDown.addEventListener('click', function() {
    openDropDown.classList.toggle('exit');
    openDropDown.classList.toggle('hide');
})
const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');
const navbar = document.getElementById('navbar');

let isMenuOpen = false; // Add a variable to keep track of the menu state

// Function to toggle mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    isMenuOpen = !isMenuOpen; // Toggle the menu state on each click
};

// Add a separate event listener for the mobile menu icon click
menu.addEventListener('click', mobileMenu);

// Prevent closing the menu on scroll
window.addEventListener('scroll', function () {
    if (isMenuOpen) {
        mobileMenu();
    }
});


window.addEventListener('scroll',function (){
    var scrollTop = window.scrollX || document.documentElement.scrollTop;
    if(scrollTop>theEnd){
        navbar.style.top='-80px';
    } 
    else{
        navbar.style.top='0';
    }
    theEnd=scrollTop;
})

var slideIndex1 = 1;
showSlides1(slideIndex1);
function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}
function currentSlide(n) {
    showSlides1(slideIndex1= n);
}
function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("slider-1");
    if (n > slides.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1 - 1].style.display = "block";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}
function currentSlide(n) {
    showSlides2(slideIndex2= n);
}
function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("slider-2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}
function currentSlide(n) {
    showSlides3(slideIndex3= n);
}
function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("slider-3");
    if (n > slides.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3 - 1].style.display = "block";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);
function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}
function currentSlide(n) {
    showSlides4(slideIndex4= n);
}
function showSlides4(n) {
    var i;
    var slides = document.getElementsByClassName("slider-4");
    if (n > slides.length) { slideIndex4 = 1 }
    if (n < 1) { slideIndex4 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex4 - 1].style.display = "block";
}
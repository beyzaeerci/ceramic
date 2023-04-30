const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navigation = document.querySelector(".navigation");
menuBtn.addEventListener("click", () => {
    closeBtn.classList.remove("passive");
    closeBtn.classList.add("active");
    navigation.classList.toggle("active");
    menuBtn.classList.add("passive");
    menuBtn.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    menuBtn.classList.remove("passive");
    menuBtn.classList.add("active");
    navigation.classList.remove("active");
    closeBtn.classList.remove("active");
    closeBtn.classList.add("passive");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    contents.forEach((content) => {
        content.classList.remove("active");
    });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});
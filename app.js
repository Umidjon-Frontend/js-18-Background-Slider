const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftArrowBtn = document.querySelector(".left-arrow");
const rightArrowBtn = document.querySelector(".right-arrow");

let activeSlide = 0;

function setBgImg() {
    let a = (body.style.backgroundImage =
        slides[activeSlide].style.backgroundImage);
}

leftArrowBtn.addEventListener("click", () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setBgImg();
    setSlideActive();
});

rightArrowBtn.addEventListener("click", () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setBgImg();
    setSlideActive();
});

function setSlideActive() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slides[activeSlide].classList.add("active");
}

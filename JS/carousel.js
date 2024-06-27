let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
let slideTimer;

function showSlide() {
    slides[0].classList.remove("initial-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide", "previous-slide", "next-slide");
    }
    slides[slideIndex].classList.add("active-slide");
    addPrevSlide(slideIndex);
    addNextSlide(slideIndex);
    const slideWidth = slides[slideIndex].offsetWidth;
    const container = document.getElementsByClassName("slideshow-container")[0];
    container.scrollLeft = slides[slideIndex].offsetLeft - (container.offsetWidth - slideWidth) / 2;
}

function prevSlide() {
    clearInterval(slideTimer);
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide();
    startSlide();
}

function nextSlide() {
    clearInterval(slideTimer);
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide();
    startSlide();
}

function addPrevSlide(index) {
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("previous-slide");
}

function addNextSlide(index) {
    index = (index + 1) % slides.length;
    slides[index].classList.add("next-slide");
}

function startSlide() {
    slideTimer = setInterval(() => {
        nextSlide();
    }, 3000);
}

showSlide();
startSlide();
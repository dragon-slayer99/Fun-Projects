const slides = document.querySelectorAll('.slides img');
let slideIdx = 0;
let intervalID = null;


document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider(){

    if(slides.length > 0){
        slides[slideIdx].classList.add('displaySlide');
        intervalID = setInterval(nextSlide, 2500);
    }

}

function showSlides(idx){

    if(idx >= slides.length){
        slideIdx = 0;
    }
    else if(idx < 0){
        slideIdx = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[slideIdx].classList.add('displaySlide');
}

function prevSlide(){
    slideIdx--;
    showSlides(slideIdx);
}

function nextSlide(){
    slideIdx++;
    showSlides(slideIdx);
}

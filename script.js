var tl=gsap.timeline()
tl.from('.logo,.nav-items li ',{
    y:-30,
    duration:0.5,
    opacity:0,
    stagger:0.3,
    ease: "power2.inOut"
})
tl.from('.main-content ',{
    y:-30,
    duration:0.5,
    opacity:0,
    stagger:0.3,
    ease: "power2.inOut"
})

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

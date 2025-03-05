function toggleMenu() {
  let navItems = document.querySelector(".nav-items");
  let toggleButton = document.querySelector(".menu-toggle");
  
  if (navItems.style.display === "none" || navItems.style.display === "") {
      navItems.style.display = "flex";
      setTimeout(() => {
          navItems.classList.add("active");
      }, 10);
      toggleButton.innerHTML = "&#10006;"; // Cross icon
  } else {
      navItems.classList.remove("active");
      setTimeout(() => {
          navItems.style.display = "none";
      }, 300);
      toggleButton.innerHTML = "&#9776;"; // Hamburger icon
  }
}

var tl=gsap.timeline()
tl.from('.logo,.nav-items li ',{
    y:-30,
    duration:0.5,
    opacity:0,
    stagger:0.3,
    ease: "power2.inOut"
});
tl.from('.main-content', {
    y: -30,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.inOut"
});

// ✅ FIXED Swiper.js CODE
const swiper = new Swiper('.swiper-wrapper', { // <- Change to .swiper
    direction: 'horizontal', // <- Vertical se horizontal kar diya
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true // <- Pagination clickable banaya
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1 // <- Fixed Typo
        },
        620: {
            slidesPerView: 2 // <- Fixed Typo
        },
        1024: {
            slidesPerView: 3 // <- Fixed Typo
        }
    }
});

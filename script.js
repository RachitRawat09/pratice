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

// gsap.from('.section '{
//     scrolltrigger()
// })

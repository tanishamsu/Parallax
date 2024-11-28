gsap.registerPlugin(ScrollTrigger);
const tl= gsap.timeline({


scrollTrigger : {
    trigger: ".container",
    start: "100% 100%",
    end : "+=200%",
    scrub: 1,
    pin: true,
}
});

tl.from("#letter1",{
    y:400,
    duration:8,
    
})
tl.from("#letter2",{
    y:-400,
    duration:8,
    delay:1,
})
tl.from("#letter3",{
    y:400,
    duration:8,
    delay:2,
})

tl.to("#circle",
    {
        x:1390,
        rotate:360,
        duration:8,
        backgroundColor:'yellow',
    }
)

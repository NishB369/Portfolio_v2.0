var box = document.querySelector(".main_quote_container h1")

gsap.to(box, {
    x: -1375,
    scrollTrigger: {
        trigger: ".main_quote_container",
        scroller: "body",
        start: "top 0%",
        end: "top -65%",
        // markers: true,
        scrub: 3,
        pin: true,
        // pinSpacing: false, // This prevents the creation of extra space
    }
});
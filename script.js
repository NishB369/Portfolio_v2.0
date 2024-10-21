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

const aurDekhen = document.querySelector('.aur-dekhen');
const aurDekhenCircle = document.querySelector('.aur-dekhen-circle');

gsap.set(aurDekhenCircle, { scale: 1 });

aurDekhen.addEventListener('mouseenter', () => {
    gsap.to(aurDekhen, {
        backgroundColor: 'black',
        borderColor: '#ffa500',
        borderWidth: 2,
        duration: 0.5,
        ease: 'power2.inOut'
    });
    
    gsap.to(aurDekhenCircle, {
        scale: 1.2,
        borderColor: '#ffa500',
        borderWidth: 2,
        duration: 0.5,
        ease: 'power2.inOut'
    });
});

aurDekhen.addEventListener('mouseleave', () => {
    gsap.to(aurDekhen, {
        backgroundColor: '#ffa500',
        borderColor: 'black',
        borderWidth: 1,
        duration: 0.5,
        ease: 'power2.inOut'
    });
    
    gsap.to(aurDekhenCircle, {
        scale: 1,
        borderColor: 'black',
        borderWidth: 1,
        duration: 0.5,
        ease: 'power2.inOut'
    });
});

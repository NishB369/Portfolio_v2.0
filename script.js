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

var iframe = document.querySelector('iframe');

var linkList = [
    "https://scribesavvy.com/",
    "https://amanportfolioo.vercel.app/",
    "https://caasf.vercel.app/",
]

// Get the carousel buttons and the anchor tag
const prevBtn = document.querySelector('.btn_container span:first-child');
const nextBtn = document.querySelector('.btn_container span:last-child');
const visitLink = document.querySelector('#btn_2 a');

let currentIndex = 0;

function updateContent() {
    iframe.src = linkList[currentIndex];
    visitLink.href = linkList[currentIndex];
}

updateContent();

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + linkList.length) % linkList.length;
    updateContent();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % linkList.length;
    updateContent();
});


var cardsList = document.querySelectorAll(".card")
cardsList.forEach(function(card) {
    gsap.to(card,{
        opacity:0,
        scale:0.7,
        scrollTrigger:{
            trigger:card,
            scroller:"body",
            start:"top 15%",
            end:"bottom 25%",
            // markers:true,
            scrub:1,
            // pin:true
        }
    })
})

const smContainers = document.querySelectorAll('.sm_container');

const iconDivs = document.querySelectorAll('.icons_container div');

if (smContainers[0]) {
    smContainers[0].style.display = 'flex';
}


let lastHoveredIndex = 0;

iconDivs.forEach((iconDiv, index) => {
    iconDiv.addEventListener('mouseenter', () => {
        smContainers.forEach(container => {
            container.style.display = 'none';
        });
        
        if (smContainers[index]) {
            smContainers[index].style.display = 'flex';
            lastHoveredIndex = index;
        }
    });
});

document.querySelector('.icons_container').addEventListener('mouseleave', () => {
    smContainers.forEach(container => {
        container.style.display = 'none';
    });
    
    if (smContainers[lastHoveredIndex]) {
        smContainers[lastHoveredIndex].style.display = 'flex';
    }
});



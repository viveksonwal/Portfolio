/*==================================================
VIVEK PORTFOLIO
script.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {




    /*=========================
      STICKY HEADER
    =========================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 50){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });



    /*=========================
      MOBILE MENU
    =========================*/

    const menuBtn=document.querySelector(".menu-btn");

    const mobileMenu=document.querySelector(".mobile-menu");

    menuBtn.addEventListener("click",()=>{

        menuBtn.classList.toggle("active");

        mobileMenu.classList.toggle("active");

    });



    /*=========================
      CLOSE MENU
    =========================*/

    document.querySelectorAll(".mobile-menu a").forEach(link=>{

        link.addEventListener("click",()=>{

            menuBtn.classList.remove("active");

            mobileMenu.classList.remove("active");

        });

    });



    /*=========================
      ACTIVE NAV
    =========================*/

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            const height=section.clientHeight;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

});

/*=========================
LENIS SMOOTH SCROLL
=========================*/

const lenis = new Lenis({
    duration:1.2,
    smoothWheel:true,
    smoothTouch:false
});

function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);



/*=========================
GSAP
=========================*/

gsap.registerPlugin(ScrollTrigger);

lenis.on("scroll",ScrollTrigger.update);

gsap.ticker.add((time)=>{

    lenis.raf(time*1000);

});

gsap.ticker.lagSmoothing(0);



/*=========================
BACK TO TOP
=========================*/

const backTop=document.querySelector(".back-top");

if(backTop){

    backTop.addEventListener("click",(e)=>{

        e.preventDefault();

        lenis.scrollTo(0);

    });

}



/*=========================
SCROLL INDICATOR
=========================*/

const scrollIndicator=document.querySelector(".scroll-indicator");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        scrollIndicator.style.opacity="0";

    }else{

        scrollIndicator.style.opacity="1";

    }

});



/*=========================
BUTTON RIPPLE
=========================*/

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        gsap.to(button,{
            scale:1.04,
            duration:.25
        });

    });

    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{
            scale:1,
            duration:.25
        });

    });

});



/*=========================
PROJECT CARD HOVER
=========================*/

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        gsap.to(card,{
            y:-10,
            duration:.3
        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{
            y:0,
            duration:.3
        });

    });

});



/*=========================
SERVICE CARD HOVER
=========================*/

document.querySelectorAll(".service-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        gsap.to(card,{
            scale:1.02,
            duration:.3
        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{
            scale:1,
            duration:.3
        });

    });

});





gsap.from("body",{

    opacity:0,

    duration:.8,

    ease:"power2.out"

});


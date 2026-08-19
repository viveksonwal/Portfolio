/*==================================================
ANIMATION.JS
GSAP ANIMATIONS
==================================================*/

gsap.registerPlugin(ScrollTrigger);

/*==============================
HERO ANIMATION
==============================*/

const heroTimeline = gsap.timeline();

heroTimeline
.from(".hero-tag",{
    y:40,
    opacity:0,
    duration:.8,
    ease:"power3.out"
})

.from(".hero h1",{
    y:80,
    opacity:0,
    duration:1,
    ease:"power4.out"
},"-=0.4")

.from(".hero-subtitle",{
    y:40,
    opacity:0,
    duration:.8
},"-=0.5")

.from(".hero-buttons",{
    y:40,
    opacity:0,
    duration:.7
},"-=0.4")

.from(".hero-stats div",{
    y:30,
    opacity:0,
    stagger:.15,
    duration:.6
},"-=0.3")

.from(".profile-card",{
    scale:.85,
    opacity:0,
    duration:1
},"-=1");


/*==============================
SCROLL REVEAL
==============================*/

gsap.utils.toArray(".section").forEach(section=>{

    gsap.from(section,{

        y:80,

        opacity:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:section,

            start:"top 80%"

        }

    });

});


/*==============================
PROJECT CARDS
==============================*/

gsap.utils.toArray(".project-card").forEach(card=>{

    gsap.from(card,{

        y:80,

        opacity:0,

        duration:.8,

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        }

    });

});


/*==============================
SERVICE CARDS
==============================*/

gsap.utils.toArray(".service-card").forEach(card=>{

    gsap.from(card,{

        scale:.9,

        opacity:0,

        duration:.7,

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        }

    });

});


/*==============================
SKILL CARDS
==============================*/

gsap.from(".skill-card",{

    opacity:0,

    y:50,

    stagger:.1,

    duration:.6,

    scrollTrigger:{

        trigger:".skills",

        start:"top 80%"

    }

});
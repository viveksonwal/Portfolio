/*==================================================
CURSOR.JS
Premium Custom Cursor
==================================================*/

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

/*==============================
Mouse Position
==============================*/

window.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

});

/*==============================
Smooth Cursor
==============================*/

function animateCursor(){

    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();

/*==============================
Hover Effect
==============================*/

const hoverElements = document.querySelectorAll(

"a, button, .btn, .project-card, .service-card, .skill-card"

);

hoverElements.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("active");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("active");

    });

});

/*==============================
Hide Cursor On Mobile
==============================*/

if(window.innerWidth < 992){

    cursor.style.display="none";
    cursorDot.style.display="none";

}

/*==============================
Cursor Click Animation
==============================*/

window.addEventListener("mousedown",()=>{

    cursor.style.transform="translate(-50%,-50%) scale(.75)";

});

window.addEventListener("mouseup",()=>{

    cursor.style.transform="translate(-50%,-50%) scale(1)";

});
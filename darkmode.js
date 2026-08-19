/*==================================================
DARKMODE.JS
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

const themeBtn=document.querySelector(".theme-btn");

const body=document.body;

/*==================================
Load Saved Theme
==================================*/

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="dark"){

    body.classList.add("dark");

    if(themeBtn){

        themeBtn.innerHTML="☀️";

    }

}else{

    if(themeBtn){

        themeBtn.innerHTML="🌙";

    }

}

/*==================================
Toggle Theme
==================================*/

if(themeBtn){

themeBtn.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML="☀️";

    }

    else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML="🌙";

    }

});

}

});
//==========================
// Smooth Scroll
//==========================

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener('click',function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

target.scrollIntoView({

behavior:'smooth'

});

});

});

//==========================
// Header Background
//==========================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.85)";
header.style.backdropFilter="blur(15px)";
header.style.boxShadow="0 0 20px rgba(0,229,255,.2)";

}else{

header.style.background="rgba(255,255,255,.05)";
header.style.boxShadow="none";

}

});

//==========================
// Scroll Animation
//==========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(80px)";

sec.style.transition=".8s";

observer.observe(sec);

});

//==========================
// Song Cards Hover
//==========================

document.querySelectorAll(".song-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-18px) scale(1.04)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

//==========================
// Gallery Zoom
//==========================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

//==========================
// Social Icons
//==========================

document.querySelectorAll(".social a").forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="translateY(-10px) rotate(360deg)";

icon.style.transition=".5s";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="translateY(0) rotate(0deg)";

});

});

//==========================
// Contact Form
//==========================

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been sent.");

form.reset();

});

//==========================
// Typing Effect
//==========================

const text="Professional Singer";

let i=0;

const heading=document.querySelector(".hero-text h2");

heading.innerHTML="";

function typing(){

if(i<text.length){

heading.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();

//==========================
// Active Menu
//==========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-150;
const height=sec.offsetHeight;

if(top>=offset && top<offset+height){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

//==========================
// Button Ripple
//==========================

document.querySelectorAll(".btn,.btn2").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},200);

});

});

//==========================
// Hero Image Floating Shadow
//==========================

const hero=document.querySelector(".hero-image img");

setInterval(()=>{

hero.style.filter="drop-shadow(0 0 30px cyan)";

setTimeout(()=>{

hero.style.filter="drop-shadow(0 0 10px cyan)";

},1000);

},2000);

//==========================
// Console
//==========================

console.log("Suresh Patel Premium Website Loaded Successfully");

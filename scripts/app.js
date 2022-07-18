// Hamburger Mobile Nav Bar
const mobileNav = document.getElementsByClassName("mobileNavButton");
const mobileNavButton = mobileNav[0].children[1];

const mobileNavMenu = document.getElementsByClassName("mobileNav")
const mobileNavSlideIn = mobileNavMenu[0].children[1];


mobileNavButton.addEventListener('click', function() {
   mobileNavSlideIn.classList.toggle("active");
   mobileNavButton.classList.toggle('fa-bars');
   mobileNavButton.classList.toggle('fa-x');
});

mobileNavSlideIn.addEventListener('click', (e) => {
   if (e.target.matches('.mobileItem')) {
      closeSideMenu();
      mobileNavButton.classList.toggle('fa-bars');
      mobileNavButton.classList.toggle('fa-x');

      window.location.href = e.target.href;
   }
})

function closeSideMenu() {
   mobileNavSlideIn.classList.remove('active');
}


//  Typewriter Animation
// source: https://codepen.io/codefoxx/pen/xxdoyBJ

let textArray = ["Front-End Web Developer"];
let textPosition = 0;
let speed = 110;

typewriter = () => {
   document.querySelector('#message').innerHTML = textArray[0].substring(0, textPosition) + '<span>\u25AE</span>';

   if (textPosition++ != textArray[0].length)
      setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)


// Scroll Animation
// source: https://alvarotrigo.com/blog/css-animations-scroll/

function reveal() {
   let reveals = document.querySelectorAll(".reveal")

   for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 95;

      if (elementTop < windowHeight - elementVisible) {
         reveals[i].classList.add("activee");
      } else {
         reveals[i].classList.remove("activee");
      }
   }
}

window.addEventListener("scroll", reveal);

reveal();


// Image Carosuel 
// https://github.com/john-smilga/javascript-basic-projects/tree/master/15-slider/final
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
   slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", function () {
   counter++;
   carousel();
});

prevBtn.addEventListener("click", function () {
   counter--;
   carousel();
});

function carousel() {
  // working with slides
//   if (counter === slides.length) {
//     counter = 0;
//   }
//   if (counter < 0) {
//     counter = slides.length - 1;
//   }
  // working with buttons

   if (counter < slides.length - 1) {
      nextBtn.style.display = "block";
   } else {
      nextBtn.style.display = "none";
   }
   if (counter > 0) {
      prevBtn.style.display = "block";
   } else {
      prevBtn.style.display = "none";
   }
   slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
   });
}

prevBtn.style.display = "none";
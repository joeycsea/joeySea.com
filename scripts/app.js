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

let textArray = ["front-end web developer"];
let textPosition = 0;
let speed = 100;

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
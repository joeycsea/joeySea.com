// Mobile nav bar
const mobileNav = document.getElementsByClassName("mobileNavButton");
const mobileNavButton = mobileNav[0].children[1];

const mobileNavMenu = document.getElementsByClassName("mobileNav")
const mobileNavSlideIn = mobileNavMenu[0].children[1];

mobileNavButton.addEventListener('click', function() {
   mobileNavSlideIn.classList.toggle("active");
   const icon = this;
   icon.classList.toggle('fa-bars');
   icon.classList.toggle('fa-x');
});
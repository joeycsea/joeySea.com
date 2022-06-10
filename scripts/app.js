// Mobile nav bar
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


// Navbar Links --------------------------------------
// Add underline when a link is actived,
// and remove underline when the link is not actived.
const linkLists = document.querySelector("#navbar__link-lists");
let activeLink = null;

linkLists.addEventListener("click", function (event) {
  const clickedLink = event.target.closest("a");

  if (clickedLink && clickedLink !== activeLink) {
    if (activeLink) {
      activeLink.classList.remove("active");
    }
    clickedLink.classList.add("active");
    activeLink = clickedLink;
  } else {
    activeLink = null;
  }
});


// Display and Close Overlay and Vartical Navbar Links -----------------------------------
// When click the hamburger navbar, display whole screen overlay and vertical navbar links.
const hamburger = document.querySelector(".navbar__toggle");
const overlay = document.querySelector(".overlay");
const navbarVertical = document.querySelector(".navbar__links");

hamburger.addEventListener("click", function () {
  overlay.classList.toggle("visible");
  navbarVertical.classList.toggle("visible");
  hamburger.style.display = "none";
});
// When click outside of vertical navbar, close overlay and vertical navbar links.
closeVerticalNavbarOnClickOutside(hamburger, overlay, navbarVertical);


// Listen for scroll events on the window
const header = document.querySelector('header');
const headerPosition = header.offsetTop;

window.addEventListener('scroll', function() {
  if (this.window.pageYOffset > headerPosition) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// Function ***************************************************************************

// Function: Close Overlay and Vartical Navbar Links -----------------------------------
// When click outside of vertical navbar, close overlay and vertical navbar links.
function closeVerticalNavbarOnClickOutside(
  hamburgerSelector,
  overlaySelector,
  navbarSelector
) {
  overlaySelector.addEventListener('click', function (event) {
    const isNavbarVisible = navbarSelector.classList.contains('visible');
    const isClickInsideNavbar = navbarSelector.contains(event.target);

    if (isNavbarVisible && !isClickInsideNavbar) {
      navbarSelector.classList.remove('visible');
      overlaySelector.classList.remove('visible');
      hamburgerSelector.style.display = '';
    }
  });
}

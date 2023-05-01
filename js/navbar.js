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

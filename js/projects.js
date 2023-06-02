// Projects Item Filter --------------------------------------
// Filter projects based on related data-filter value
const navList = document.querySelectorAll('#projects__navList li');
const projects = document.querySelectorAll('.single-project');

navList.forEach(function(item) {
    item.addEventListener('click', function() {
        const filterValue = item.getAttribute('data-filter');
        filterProjects(filterValue);
        addBottomLine(item);
    });
});

function filterProjects(filterValue) {
    projects.forEach(function(project) {
        if (filterValue === '*') {
            project.style.display = 'block';
        } else if (project.classList.contains(filterValue))  {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Projects Navbar Adding Bottom Line --------------------------------------
// When click the navbar item,
// Add the bottome line.
function addBottomLine(clickedItem) {
    navList.forEach(function(item) {
        item.classList.remove('current');
    });
    clickedItem.classList.add('current');
}

// Display Projects Overlay Container --------------------------------------
// When clicking a card in project gallery,
// display the overlay container.
// when clicking a close button on overlay container,
// close the overlay container
const overlayContainer = document.querySelector('.projects__overlay-container');
const projectCards = document.querySelectorAll('.single-project');
const closeButton = overlayContainer.querySelector('.close-btn');

projectCards.forEach((card) => {
    card.addEventListener('click', function() {
        overlayContainer.classList.add('active');
    });
});

closeButton.addEventListener('click', function() {
    overlayContainer.classList.remove('active');
});

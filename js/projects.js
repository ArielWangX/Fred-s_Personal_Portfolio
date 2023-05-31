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
// when click the navbar item,
// Add the bottome line.
function addBottomLine(clickedItem) {
    navList.forEach(function(item) {
        item.classList.remove('current');
    });
    clickedItem.classList.add('current');
}
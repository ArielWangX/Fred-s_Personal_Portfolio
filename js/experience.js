// Experience Cards --------------------------------------
// Add classname 'even' when card number is even number,
// Add classname 'odd' when card number is odd number.
const cards = document.getElementsByClassName('card');

for(let i = 0; i < cards.length; i++) {
    if (i % 2 === 0) {
        cards[i].classList.add('odd');
    } else {
        cards[i].classList.add('even');
    }
}

// Timeline --------------------------------------
// Add 'show' class to the timeline element,
// when experience card contents in the viewport, trigger the animation to show the timeline.
function showTimeline() {
    let timeline = document.querySelector('.timeline-container');
    timeline.classList.add('show');
}

function handleScroll() {
    let timeline = document.querySelector('.timeline-container');
    let timelinePosition = timeline.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (timelinePosition < screenHeight) {
        showTimeline();
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);
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

function handleTimelineScroll() {
    let timeline = document.querySelector('.timeline-container');
    let timelinePosition = timeline.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (timelinePosition < screenHeight) {
        showTimeline();
        window.removeEventListener('scroll', handleTimelineScroll);
    }
}

window.addEventListener('scroll', handleTimelineScroll);


// Expericen Cards Animation --------------------------------------
// Add 'show' class to the cards element,
// when experience card contents in the viewport, trigger the animation on the cards.
function showCards() {
    let cards = document.querySelectorAll('.experience__text-box');
    let delay = 0;

    cards.forEach(function(card) {
        setTimeout(function() {
            card.classList.add('show');
        }, delay);
        delay += 800;
    });
}

function handleCardsScroll() {
    let cardsSection = document.querySelector('.timeline-container');
    let cardsPosition = cardsSection.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (cardsPosition < screenHeight) {
        showCards();
        window.removeEventListener('scroll', handleCardsScroll);
    }
}

window.addEventListener('scroll', handleCardsScroll);
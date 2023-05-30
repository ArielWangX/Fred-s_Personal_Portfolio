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
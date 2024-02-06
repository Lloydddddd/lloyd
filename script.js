// Get references to the 'Yes' and 'No' buttons
const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');

// Get references to the first and second cards
const firstCard = document.getElementById('firstCard');
const secondCard = document.getElementById('secondCard');
const thirdCard = document.getElementById('thirdCard');

// Function to handle 'Yes' button click
function handleYesButtonClick() {
    // Hide the first card
    firstCard.style.display = 'none';
    // Display the second card
    secondCard.style.display = 'block';
}

// Function to handle 'No' button click
function handleNoButtonClick() {
    // Hide the first card
    firstCard.style.display = 'none';
    // Display the third card
    thirdCard.style.display = 'block';
}

// Add click event listeners to the buttons
yesButton.addEventListener('click', handleYesButtonClick);
noButton.addEventListener('click', handleNoButtonClick);



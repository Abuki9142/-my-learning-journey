// ===============================
// SELECT ELEMENTS
// ===============================

const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.getElementById("submit-btn");

const ratingCard = document.getElementById("rating-card");
const thankCard = document.getElementById("thank-card");

const selectedRatingText = document.getElementById("selected-rating");

// ===============================
// VARIABLES
// ===============================

let selectedRating = null;

// ===============================
// SELECT RATING
// ===============================

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
    // Remove active class from all buttons
    ratingButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    
    // Add active class to clicked button
    button.classList.add("active");
    
    // Save selected rating
    selectedRating = button.dataset.value;
  });
});

// ===============================
// SUBMIT
// ===============================

submitButton.addEventListener("click", () => {
  
  if (!selectedRating) {
    alert("Please select a rating before submitting.");
    return;
  }
  
  // Show selected rating
  selectedRatingText.textContent = selectedRating;
  
  // Hide rating card
  ratingCard.classList.add("hidden");
  
  // Show thank-you card
  thankCard.classList.remove("hidden");
});
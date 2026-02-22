// Object containing the answer "Yes" in different languages
const answers_yes = {
  "english": "Yes"
}

// Retrieving DOM elements
const button = document.getElementById("no-button"); // Button triggering animation
const yes_button = document.getElementById('yes-button'); // Button triggering "Yes" response

// Function to animate movement of an element
const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`, // Dynamically setting property to animate
    easing: "easeOutCirc" // Easing function for animation
  });

// Array of event types for which to trigger the animation
["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    // Random position within the viewport
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    // Animating the movement of the button
    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

// Function to generate random number within a range
const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

let clicks = 0; // Counter for button clicks
// Event listener for "Yes" button
yes_button.addEventListener('click', () => {
  clicks++;
  // Redirecting after the first click
  if (clicks === 1) {
    window.location.href = 'index3.html'; 
 }
});

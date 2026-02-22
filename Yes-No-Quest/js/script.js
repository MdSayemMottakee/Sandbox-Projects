const brokenImages = [
    "images/broken1.gif",
    "images/broken2.gif",
    "images/broken3.gif",
    "images/broken4.gif",
    "images/broken5.gif",
    "images/broken6.gif",
    "images/broken7.gif",
    "images/broken8.gif",
    "images/broken9.gif",
    "images/broken10.gif",
    "images/broken11.gif",
    "images/broken12.gif",
    "images/broken13.gif"
]; // Array of broken images for the banner

const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really realy sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over.."
    ]
}; // Object containing arrays of possible responses for the "No" button, in different languages

answers_yes = {
    "english": "Yes"
}; // Object containing possible response for the "Yes" button, in different languages

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button'); // Selecting the "No" button element
const yes_button = document.getElementById('yes-button'); // Selecting the "Yes" button element
let i = 1; // Index for cycling through "No" button responses
let size = 50; // Initial size of the "Yes" button
let clicks = 0; // Counter for button clicks
let brokenIndex = 0; // Index for cycling through broken images

no_button.addEventListener('click', () => {
    // Event listener for "No" button click
    let banner = document.getElementById('banner'); // Selecting the banner element
    if (clicks === 0) {
        banner.src = brokenImages[brokenIndex]; // Displaying the initial broken image
        refreshBanner(); // Refreshing the banner to force load
    }
    clicks++; // Incrementing the click counter
    banner.src = brokenImages[brokenIndex]; // Displaying the broken image
    brokenIndex = (brokenIndex + 1) % brokenImages.length; // Cycling through broken images
    refreshBanner(); // Refreshing the banner to force load
    // Increasing button height and width gradually
    const sizes = [40, 50, 30, 35, 45]; // Array of possible size increments
    const random = Math.floor(Math.random() * sizes.length); // Generating a random index
    size += sizes[random]; // Incrementing button size randomly
    yes_button.style.height = `${size}px`; // Applying new height to the "Yes" button
    yes_button.style.width = `${size}px`; // Applying new width to the "Yes" button
    let total = answers_no[language].length; // Total number of responses for the "No" button
    if (clicks === 14) {
        window.location.href = 'index2.html'; // Navigate to index2.html after 14 clicks on the No button
    }
    // Changing button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i]; // Displaying next response
        i++; // Incrementing response index
    } else if (i === total - 1) {
        i = 1; // Resetting response index
        no_button.innerHTML = answers_no[language][0]; // Displaying first response
        yes_button.innerHTML = answers_yes[language]; // Displaying "Yes" response
        yes_button.style.height = "50px"; // Resetting button height
        yes_button.style.width = "50px"; // Resetting button width
        size = 50; // Resetting button size
    }
});

yes_button.addEventListener('click', () => {
    // Event listener for "Yes" button click
    clicks++; // Incrementing the click counter
    if (clicks === 1) {
        window.location.href = 'index3.html'; // Navigate to index3.html after 1 click on the Yes button
    }
});

function refreshBanner() {
    // Function to reload banner gif to force load
    let banner = document.getElementById('banner'); // Selecting the banner element
    let src = banner.src; // Storing the current source
    banner.src = ''; // Clearing the source
    banner.src = src; // Reassigning the source to force reload
}

const brokenImages = [
    "images/broken1.gif", "images/broken2.gif", "images/broken3.gif", "images/broken4.gif",
    "images/broken5.gif", "images/broken6.gif", "images/broken7.gif", "images/broken8.gif",
    "images/broken9.gif", "images/broken10.gif", "images/broken11.gif", "images/broken12.gif",
    "images/broken13.gif"
];

const answers_no = [
    "No", "Are you sure?", "Are you really sure??", "Are you really realy sure???",
    "Think again?", "Don't believe in second chances?", "Why are you being so cold?",
    "Maybe we can talk about it?", "I am not going to ask again!",
    "Ok now this is hurting my feelings!", "You are now just being mean!",
    "Why are you doing this to me?", "Please give me a chance!",
    "I am begging you to stop!", "Ok, Let's just start over.."
];

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
const banner = document.getElementById('banner');
const questContent = document.getElementById('quest-content');
const successContent = document.getElementById('success-content');
const body = document.body;

let clickCount = 0;
let noIndex = 1;
let yesSize = 50;

// Function to animate movement for the "Fear" state (from main.js logic)
const animateMove = (element, prop, pixels) =>
    anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: "easeOutCirc",
        duration: 500
    });

const getRandomNumber = (num) => Math.floor(Math.random() * (num + 1));

no_button.addEventListener('click', () => {
    clickCount++;

    if (clickCount < 14) {
        // Quest Phase
        banner.src = brokenImages[clickCount % brokenImages.length];
        
        // Grow Yes Button
        yesSize += 40;
        yes_button.style.width = `${yesSize}px`;
        yes_button.style.height = `${yesSize}px`;

        // Update No Button Text
        if (noIndex < answers_no.length) {
            no_button.innerHTML = `<p>${answers_no[noIndex]}</p>`;
            noIndex++;
        } else {
            // Reset if they keep clicking? Or just stay at the last one
            noIndex = 0;
            no_button.innerHTML = `<p>${answers_no[noIndex]}</p>`;
        }
    } else {
        // Transition to Fear Phase (Index2 logic)
        if (clickCount === 14) {
            body.className = 'state-fear';
            banner.src = "images/fear.gif";
            no_button.innerHTML = "<p>No &#128516;</p>";
            no_button.style.position = 'absolute';
        }

        // Run away logic
        const top = getRandomNumber(window.innerHeight - no_button.offsetHeight);
        const left = getRandomNumber(window.innerWidth - no_button.offsetWidth);
        animateMove(no_button, "left", left).play();
        animateMove(no_button, "top", top).play();
    }
});

yes_button.addEventListener('click', () => {
    // Transition to Success Phase (Index3 logic)
    body.className = 'state-success';
    questContent.style.display = 'none';
    successContent.style.display = 'block';
    banner.src = "images/yes.gif";
    
    // Simple entry animation for success message
    anime({
        targets: '#success-content',
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 1000
    });
});

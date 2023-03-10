// create a recognition object
const recognition = new webkitSpeechRecognition();

// set the recognition language to the user's language
recognition.lang = 'en-NG'; // set to Nigerian English

// define a function to handle the recognition result
recognition.onresult = function(event) {
    // get the recognized text from the event
    const text = event.results[0][0].transcript;
    // set the text that was recognized
    setText(text);
}

// start the recognition when the start button is clicked
document.getElementById("start-button").addEventListener("click", function() {
    recognition.start();
});

const pal = document.querySelector('.pal');
// copy the text to the clipboard when the copy button is clicked
document.getElementById("copy-button").addEventListener("click", function() {
    const text = document.getElementById("text").textContent;
    navigator.clipboard.writeText(text);
    pal.style.visibility = 'visible';
     setTimeout(function() {
    pal.style.visibility = 'hidden';
  }, 2000);
});

// set
// function to set the recognized text
function setText(text) {
    // get the text element and set its text content to the recognized text
    const textElement = document.getElementById("text");
    textElement.textContent = text;
    // enable the copy button
    const copyButton = document.getElementById("copy-button");
    copyButton.disabled = false;
}

// disable the copy button initially
const copyButton = document.getElementById("copy-button");
copyButton.disabled = true;

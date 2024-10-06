// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
var synth = window.speechSynthesis;
var textToSpeak = '';
var nouns = ['kangroo', 'tiger', 'mosquito', 'elephant', 'deer'];
var verbs = ['jumps', 'runs', 'flies', 'sleeps', 'eats'];
var adjectives = ['high', 'fast', 'up', 'noisly', 'green'];
var places = ['park', 'school', 'home', 'zoo', 'beach'];
var storyOutput = document.getElementById('storyOutput');

/* Functions
-------------------------------------------------- */
function getRandomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function addToStory(part) {
	textToSpeak += part + ' ';
	storyOutput.textContent = textToSpeak; // Output the current story
}

function generateStory() {
	textToSpeak = `${getRandomElement(adjectives)} ${getRandomElement(nouns)} ${getRandomElement(verbs)} at the ${getRandomElement(places)}.`;
	storyOutput.textContent = textToSpeak; // Display the generated story
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById('nounButton').onclick = function () {
	addToStory(getRandomElement(nouns));
}

document.getElementById('verbButton').onclick = function () {
	addToStory(getRandomElement(verbs));
}

document.getElementById('adjectiveButton').onclick = function () {
	addToStory(getRandomElement(adjectives));
}

document.getElementById('placeButton').onclick = function () {
	addToStory(getRandomElement(places));
}

document.getElementById('storyButton').onclick = generateStory;

document.getElementById('speakButton').onclick = function () {
	speakNow(textToSpeak);
}

document.getElementById('resetButton').onclick = function () {
	textToSpeak = '';
	storyOutput.textContent = 'Your story will appear here.';
}

/* Speak function
-------------------------------------------------- */
function speakNow(string) {
	var utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}

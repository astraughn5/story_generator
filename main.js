/* In the raw text file, copy all of the code underneath the heading "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" and paste it into the top of the main.js file. */

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


function randomValueFromArray(array){
	const random = Math.floor(Math.random()*array.length);
	return array[random];
  }



/* Now look at the second section of the raw text file — "2. RAW TEXT STRINGS". This contains text strings that will act as input into our program. We'd like you to contain these inside variables inside main.js:*/

let storyText = `It was 94 fahrenheit outside, so insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
let insertY = ['the soup kitchen','Disneyland', 'the White House']
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']


// Placing the event handler and incomplete function:

randomize.addEventListener('click', result);

function result() {
	let newStory = storyText

	const xItem = randomValueFromArray(insertX)
	const yItem = randomValueFromArray(insertY)
	const zItem = randomValueFromArray(insertZ)

	newStory = newStory.replaceAll(':insertx:',xItem);
	newStory = newStory.replaceAll(':inserty:',yItem);
	newStory = newStory.replaceAll(':insertz:',zItem);

	if (customName.value !== '') {
		const name = customName.value;
		newStory = newStory.replaceAll('Bob', name);
	  }
	
	  if (document.getElementById("uk").checked) {
		const weight = `${Math.round(300*0.0714286)} stone`;
		const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
		newStory = newStory.replaceAll('94 fahrenheit', temperature);
		newStory = newStory.replaceAll('300 pounds', weight);
	  }
	
	  story.textContent = newStory;
	  story.style.visibility = 'visible';
	}
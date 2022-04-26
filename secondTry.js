
// Set variables to match HTML IDs and classes
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//create function to use an array as a parameter to randomly select an index
function randomValueFromArray(array){
	const random = Math.floor(Math.random()*array.length);
	return array[random];
  }



// set arrays and story to a global variable

let storyText = `It was 94 fahrenheit outside, so insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
let insertY = ['the soup kitchen','Disneyland', 'the White House']
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']


// add an event listener to when the HTML button was clicked

randomize.addEventListener('click', result);

// create the function to run when the button is clicked

function result() {
	// reassign variables within the function to the random array selector so that upon clicking they continue to generate a new story
let xItem = randomValueFromArray(insertX)
let yItem = randomValueFromArray(insertY)
let zItem = randomValueFromArray(insertZ)

// create a conditional for custom name to be added if US is checked
	if(customName.value !== '') {
	  const name = customName.value;
	  newStory = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`
	}
	else {
		const name = 'Bob'
		newStory = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`
	}
  
	// create a conditional for custom name and conversion of temp and weight if UK is checked
	if((document.getElementById("uk").checked) &&(customName.value !== '')){
		const name = customName.value;  
		const weight = Math.round(300);
	  	const ukWeight = Math.round(weight / 14)
	  	const temperature =  Math.round(94);
	  	const ukTemp = Math.round((temperature - 32) * (5/9))
  
	  newStory = `It was ${ukTemp} Celsius outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${ukWeight} stones, and it was a hot day.`
	}
	else if ((document.getElementById("uk").checked) &&(customName.value == '')){
		const name = 'Bob';  
		const weight = Math.round(300);
	  	const ukWeight = Math.round(weight / 14)
	  	const temperature =  Math.round(94);
	  	const ukTemp = Math.round((temperature - 32) * (5/9))
  
	  newStory = `It was ${ukTemp} Celsius outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${ukWeight} stones, and it was a hot day.`
	}
	else{
		console.log('Story is checked for US')
	}
  
// toggle visbility when the button is clicked and place the story in the paragraph tag
	story.style.visibility = 'visible';
	story.textContent = newStory
}



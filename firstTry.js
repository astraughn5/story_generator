//Assign variance of story to 3 arrays
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
let insertY = ['the soup kitchen','Disneyland', 'the White House']
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away']

// establishing a customName before the function
let theName = 'Bob'

// add event to run the generateRandom Story function when the button is clicked
document.querySelector('.randomize').addEventListener('click',generateRandomStory);

// add event to run the customName function when the button is clicked
document.querySelector('.randomize').addEventListener('click',invokeCustomNameFunction);

//Get Custom Name function
function customNameFunction(str){
	// establish our custom name
	if (str){
		console.log(str)
		theName = str
		console.log(theName)
	}
	else{
	}
}


function invokeCustomNameFunction(){
	let name = document.querySelector('#customname').value
	customNameFunction(name)
}


// Get Random Number
const randomNumber = () => {
	return Math.floor(Math.random()*3)
}

// Set up the random story for insertX Array and store it in a variable
insertXStory = ''
switch (randomNumber()){
	case 0:
		console.log(insertX[0])
		insertXStory = insertX[0]
		break;
	case 1:
		console.log(insertX[1])
		insertXStory = insertX[1]
		break;
	case 2:
		console.log(insertX[2])
		insertXStory = insertX[2]
		break;
	default:
		console.log('error in switch')
		break;
}

// Set up the random story for insertY Array and store it in a variable
insertYStory = ''
switch (randomNumber()){
	case 0:
		console.log(insertY[0])
		insertYStory = insertY[0]
		break;
	case 1:
		console.log(insertY[1])
		insertYStory = insertY[1]
		break;
	case 2:
		console.log(insertY[2])
		insertYStory = insertY[2]
		break;
	default:
		console.log('error in switch')
		break;
}

// Set up the random story for insertY Array and store it in a variable
insertZStory = ''
switch (randomNumber()){
	case 0:
		console.log(insertZ[0])
		insertZStory = insertZ[0]
		break;
	case 1:
		console.log(insertZ[1])
		insertZStory = insertZ[1]
		break;
	case 2:
		console.log(insertZ[2])
		insertZStory = insertZ[2]
		break;
	default:
		console.log('error in switch')
		break;
}




// add event to run the generateRandom Story function when the button is clicked
// document.querySelector('.randomize').addEventListener('click',generateRandomStory);


//Function that fires when the button is clicked
function generateRandomStory(){
	// add the story to the p element
	document.querySelector('.story').innerText = storyText
	}

//assign the story to a Global variable
let storyText = `It was 94 fahrenheit outside, so ${insertXStory} went for a walk. When they got to ${insertYStory}, they stared in horror for a few moments, then ${insertZStory}. ${theName} saw the whole thing, but was not surprised — ${insertXStory} weighs 300 pounds, and it was a hot day.`




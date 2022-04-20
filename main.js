/* In the raw text file, copy all of the code underneath the heading "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" and paste it into the top of the main.js file. This gives you three variables that store references to the "Enter custom name" text field (customName), the "Generate random story" button (randomize), and the <p> element at the bottom of the HTML body that the story will be copied into (story), respectively. In addition you've got a function called randomValueFromArray() that takes an array, and returns one of the items stored inside the array at random.
*/
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


function randomValueFromArray(array){
	const random = Math.floor(Math.random()*array.length);
	return array[random];
  }


/* Now look at the second section of the raw text file — "2. RAW TEXT STRINGS". This contains text strings that will act as input into our program. We'd like you to contain these inside variables inside main.js:
// Store the first, big long, string of text inside a variable called storyText.
// Store the first set of three strings inside an array called insertX.
// Store the second set of three strings inside an array called insertY.
// Store the third set of three strings inside an array called insertZ.
*/



// Placing the event handler and incomplete function:
// Now return to the raw text file.
// Copy the code found underneath the heading "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" and paste it into the bottom of your main.js file. This:
// Adds a click event listener to the randomize variable so that when the button it represents is clicked, the result() function is run.
// Adds a partially-completed result() function definition to your code. For the remainder of the assessment, you'll be filling in lines inside this function to complete it and make it work properly.
// Completing the result() function:

// Create a new variable called newStory, and set its value to equal storyText. This is needed so we can create a new random story each time the button is pressed and the function is run. If we made changes directly to storyText, we'd only be able to generate a new story once.
// Create three new variables called xItem, yItem, and zItem, and make them equal to the result of calling randomValueFromArray() on your three arrays (the result in each case will be a random item out of each array it is called on). For example you can call the function and get it to return one random string out of insertX by writing randomValueFromArray(insertX).
// Next we want to replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — with the strings stored in xItem, yItem, and zItem. There are two possible string methods that will help you here — in each case, make the call to the method equal to newStory, so each time it is called, newStory is made equal to itself, but with substitutions made. So each time the button is pressed, these placeholders are each replaced with a random silly string. As a further hint, depending on the method you choose, you might need to make one of the calls twice.
// Inside the first if block, add another string replacement method call to replace the name 'Bob' found in the newStory string with the name variable. In this block we are saying "If a value has been entered into the customName text input, replace Bob in the story with that custom name."
// Inside the second if block, we are checking to see if the uk radio button has been selected. If so, we want to convert the weight and temperature values in the story from pounds and Fahrenheit into stones and centigrade. What you need to do is as follows:
// Look up the formulae for converting pounds to stone, and Fahrenheit to centigrade.
// Inside the line that defines the weight variable, replace 300 with a calculation that converts 300 pounds into stones. Concatenate ' stone' onto the end of the result of the overall Math.round() call.
// Inside the line that defines the temperature variable, replace 94 with a calculation that converts 94 Fahrenheit into centigrade. Concatenate ' centigrade' onto the end of the result of the overall Math.round() call.
// Just under the two variable definitions, add two more string replacement lines that replace '94 fahrenheit' with the contents of the temperature variable, and '300 pounds' with the contents of the weight variable.
// Finally, in the second-to-last line of the function, make the textContent property of the story variable (which references the paragraph) equal to newStory.


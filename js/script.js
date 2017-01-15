/*
This is the script for the random quote generator
Worked on by Ryan Zajac
started work on 11/17/16
*/
//functions for a random color
function randomRGB() {
	return Math.floor(Math.random() * 256);
}
function randomColor() {
	var color = 'rgb(';
	color += randomRGB() + ',';
	color += randomRGB() + ',';
	color += randomRGB() + ')'; 
	return color;
}
var quotes = [
	{quote: '"Hardships often prepare ordinary people for an extraordinary destiny."', source: 'C.S. Lewis', tags: 'inspirational'}, 
	{quote: '"When we face the worst that can happen in any situation, we grow."', source: 'Elisabeth Kübler-Ross', tags: 'motivational'}, 
	{quote: '"You miss 100% of the shots you don’t take."', source: 'Wayne Gretzky', tags: 'sports, motivational'}, 
	{quote: '"Do you know what my favorite part of the game is? The opportunity to play."', source: 'Mike Singletary', tags: 'sports, team, inspirational'},
	{quote: '"Character consists of what you do on the third and fourth tries."', source: 'James Michener', tags: 'motivational, self-improvement'}
];

var newQuotes = [];
//function that creates random number to get random quote from quotes array
function getRandomQuote() {
	return Math.floor(Math.random() * quotes.length);
}
// //function that calls getRandomQuote function and then displays the quote
function printQuote() {
	console.log(quotes);
	//if statement checks to make sure quotes length is not zero
	if (quotes.length > 0) {
		var returnedQuoteObject = getRandomQuote();
		var string = '<p class="quote">' + quotes[returnedQuoteObject].quote + '</p>';	
		string += '<p class="source">' + quotes[returnedQuoteObject].source;
		string += '<p class="tags">' + 'Tags: ' + quotes[returnedQuoteObject].tags;
	  	// string += '<span class="citation">' + quotes.citation + '</span>';
	  	// string += '<span class="year">' + quotes.year + '</span>';
		string += '</p>';
		document.getElementById('quote-box').innerHTML = string;
		document.body.style.backgroundColor = randomColor();
		//pushes array element to array named newQuote
		newQuotes.push(quotes[returnedQuoteObject]);
		//deletes element from quotes array to avoid repeating one quote before all others have been shown 
		quotes.splice(returnedQuoteObject, 1);
		}	
		else {
			//once quotes array has been emptied, this code merges the elements of newQuotes array back to quotes array
			Array.prototype.push.apply(quotes, newQuotes);
			}
		}

	

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//added function that calls printQuote every x seconds
setInterval(function printQuoteInIntervals() {
	printQuote();
}, 7500);

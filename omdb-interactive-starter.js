// INSTRUCTIONS:
// Level 1: Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created
// Level 2 (More Challenging): Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrive the year it was created. 
// ----------------------------------------------------------------------------------

// ... are the places where you need to code!

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require('request');
console.log('test');
var movieObject;
// ...

// Grab or assemble the movie name  and store it in a variable called "movieName"
var userInput = process.argv;
var movieName = userInput[2];

//mutliword
if(process.argv.length >= 3) {
	for(i = 3; i < process.argv.length; i++) {
		movieName += '+' + userInput[i];
	}
}

console.log(movieName);

// ...

// Then run a request to the OMDB API with the movie specified 
var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&r=json';

// This line is just to help us debug against the actual URL.  
console.log(queryUrl);


// Then create a request to the queryUrl
request(queryUrl, function(err, response, body) {
	if(err) {
		console.log(err);
	}

	movieObject = JSON.parse(body);
	//console.log(movieObject);
	console.log(movieObject.Year);


})
// ...
	
	// If the request is successful
	// ... 

	// Then log the Release Year for the movie
	// ...

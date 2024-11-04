// Declare and initialize 7 variables with movie names
var movie1 = "Toy Story";
var movie2 = "John Wick";
var movie3 = "Inception";
var movie4 = "The Matrix";
var movie5 = "Interstellar";
var movie6 = "Pulp Fiction";
var movie7 = "The Shawshank Redemption";

// Create an array to hold the movie variables
var topMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

// Output to the console for all the movies
for (let i = 0; i < topMovies.length; i++) {
    console.log(`Movie ${i + 1}: ${topMovies[i]}`);
}

var hasGivenValidData = false;

// Loop till user enters valid data
while(!hasGivenValidData) {
    var userInput = prompt("Which top 7 movie would you like? Pick a number between 1 to 7");
    var intNumber = parseInt(userInput);

    // To prevent the user from entering letters and alphabets, had to do this.
    let regex = /^[a-zA-Z]+$/;
    if (intNumber >= 1 && intNumber <= 7) {
        // user entered correct number
        hasGivenValidData = true
        alert(`Number ${intNumber} on the list is : ${topMovies[intNumber - 1]}`);
        break;
    } else if (regex.test(userInput)) {
        // user entered alphabets
        alert("Please enter a number between 1 and 7");
    } else {
        // user entered something else
        alert("Please enter a number between 1 and 7");
    }    
}

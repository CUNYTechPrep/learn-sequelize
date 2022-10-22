const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
function insertNewGenre() {
  // Add code here
}

/*
  Write a function that creates a new Movie in the database
  - currently, there are 5 movies
  - add one more Movie of your choice.
  - the movie CANNOT be from year 2008 (try it to learn about errors)
*/
function insertNewMovie() {
  // Add code here
}

/*
  Write a function that returns the title of the movie with ID=2
*/
function getMovieWithId2() {
  // Add code here
}

/*
  Write a function that returns an array of all the actor names
*/
function getAllActors() {
  // Add code here
}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
function getAllMoviesFrom2008() {
  // Add code here
}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
function deleteGenreYouAdded() {
  // Add code here
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
function associateRosarioToEagleEye() {
  // Add code here
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  // Add code here
}

module.exports = {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
};

const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
async function insertNewGenre() {
  // Add code here
  const newGenre = await Genre.create({ name: 'comedy' })
  return newGenre
}

/*
  Write a function that creates a new Movie in the database
  - currently, there are 5 movies
  - add one more Movie of your choice.
  - the movie CANNOT be from year 2008 (try it to learn about errors)
*/
async function insertNewMovie() {
  // Add code here
  const newMovie = await Movie.create({ title: 'The Godfather', year: 1972 })
  return newMovie
}

/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  // Add code here
  const movie = await Movie.findByPk(2)
  return movie.title
}

/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  // Add code here
  const actors = await Actor.findAll()
  const actorNames = actors.map(actor => actor.name)
  return actorNames
}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {
  // Add code here
  const movies = await Movie.findAll({ where: { year: 2008 } })
  const movieTitles = movies.map(movie => movie.title)
  return movieTitles
}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
async function deleteGenreYouAdded() {
  // Add code here
  deleted = await Genre.destroy({ where: { name: 'comedy' } })
  return deleted
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRosarioToEagleEye() {
  // Add code here
  const actor = await Actor.findOne({ where: { name: 'Rosario Dawson' } })
  const movie = await Movie.findOne({ where: { title: 'Eagle Eye' } })
  return await actor.addMovie(movie)
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  // Add code here
  const actor = await Actor.findOne({ where: { name: 'Robert Downey Jr.' } })
  const movie = await Movie.findOne({ where: { title: 'Tropic Thunder' } })
  return await movie.addActor(actor)
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

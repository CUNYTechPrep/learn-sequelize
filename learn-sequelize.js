const { Genre, Movie, Actor, sequelize } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
async function insertNewGenre() {
  await Genre.create({name: "Sci-Fi"});
}

/*
  Write a function that creates a new Movie in the database
  - currently, there are 5 movies
  - add one more Movie of your choice.
  - the movie CANNOT be from year 2008 (try it to learn about errors)
*/
async function insertNewMovie() {
  await Movie.create({name: "Star Wars"});
}

/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  const movieWithId2 = await Movie.findByPk(2);
  return movieWithId2.title;
}

/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  let allActors = await Actor.findAll();
  return allActors.map(actor => actor.name);
}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {
  let movieYears = await Movie.findAll({where: {year: 2008}});
  return movieYears.map(movie => movie.title);
}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
async function deleteGenreYouAdded() {
  await Genre.destroy(
    {
      where: {
        name: "Sci-Fi"
      }
    }
  );
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRosarioToEagleEye() {
  let movie = await Movie.findByPk(4);
  let actor = await Actor.findByPk(2);
  await actor.addMovie(movie);
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  let movie = await Movie.findByPk(5);
  let actor = await Actor.findByPk(3);
  await actor.addMovie(movie)
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

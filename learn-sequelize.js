const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
async function insertNewGenre() {
  // Add code here
  try {
    const genre = await Genre.findOrCreate({
      where: { name: 'Fantasy' },
      defaults: { name: 'Fantasy' }
    })
  }
  catch (error) {
    console.error(error);
  }
}

/*
  Write a function that creates a new Movie in the database
  - currently, there are 5 movies
  - add one more Movie of your choice.
  - the movie CANNOT be from year 2008 (try it to learn about errors)
*/
async function insertNewMovie() {
  // Add code here
  const movie = await Movie.create({title: "Learn Sequelize", year: 2024})
}

/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  // Add code here
  const movie = await Movie.findByPk(2);
  return movie.title;
}

/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  // Add code here
  const actor = await Actor.findAll();
  return actor.map(actor => actor.name);
}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {
  // Add code here
  const movies = await Movie.findAll({
    where: {year: 2008}
  })
  return movies.map(movie => movie.title);
}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
async function deleteGenreYouAdded() {
  // Add code here
  const genre = await Genre.destroy({where: {name: 'Fantasy'}});
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRosarioToEagleEye() {
  // Add code here
  const actor = await Actor.findOne({where: {name: "Rosario Dawson"}});
  const movie = await Movie.findOne({where: {title: "Eagle Eye"}});
  await movie.addActor(actor);
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  // Add code here
  const actor = await Actor.findOne({where: {name: "Robert Downey Jr."}});
  const movie = await Movie.findOne({where: {title: "Tropic Thunder"}});
  await movie.addActor(actor);
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

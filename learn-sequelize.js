const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
async function insertNewGenre() {
  try {
    await Genre.create({ name: "Sci-Fi" });
  } catch (error) {
    console.error("Error inserting new genre:", error);
  }
}

/*
  Write a function that creates a new Movie in the database
  - currently, there are 5 movies
  - add one more Movie of your choice.
  - the movie CANNOT be from year 2008 (try it to learn about errors)
*/
async function insertNewMovie() {
  try {
    await Movie.create({ title: "Inception", year: 2010 });
  } catch (error) {
    console.error("Error inserting new movie:", error);
  }
}

/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  try {
    const movie = await Movie.findByPk(2);
    return movie ? movie.title : null;
  } catch (error) {
    console.error("Error getting movie with ID 2:", error);
  }
}

/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  try {
    const actors = await Actor.findAll();
    return actors.map((actor) => actor.name);
  } catch (error) {
    console.error("Error getting all actors:", error);
  }
}


/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {
  try {
    const movies = await Movie.findAll({ where: { year: 2008 } });
    return movies.map((movie) => movie.title);
  } catch (error) {
    console.error("Error getting movies from 2008:", error);
  }
}
/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
async function deleteGenreYouAdded() {
  try {
    await Genre.destroy({ where: { name: "Sci-Fi" } });
  } catch (error) {
    console.error("Error deleting genre:", error);
  }
}
/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRosarioToEagleEye() {
  try {
    const actor = await Actor.findOne({ where: { name: "Rosario Dawson" } });
    const movie = await Movie.findOne({ where: { title: "Eagle Eye" } });
    if (actor && movie) {
      await movie.addActor(actor);
    }
  } catch (error) {
    console.error("Error associating Rosario to Eagle Eye:", error);
  }
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  try {
    const actor = await Actor.findOne({ where: { name: "Robert Downey Jr." } });
    const movie = await Movie.findOne({ where: { title: "Tropic Thunder" } });
    if (actor && movie) {
      await movie.addActor(actor);
    }
  } catch (error) {
    console.error("Error associating Robert to Tropic Thunder:", error);
  }
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

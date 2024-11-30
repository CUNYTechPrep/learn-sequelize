const { Genre, Movie, Actor } = require("./models");

async function insertNewGenre() {
  try {
    const newGenre = await Genre.create({ name: 'Horror' });
    console.log('New genre added:', newGenre);
  } catch (error) {
    console.error("Error adding genre:", error);
  }
}

async function insertNewMovie() {
  try {
    const newMovie = await Movie.create({ title: 'The Dark Knight', year: 2019 });
    console.log('New movie added:', newMovie);
  } catch (error) {
    console.error("Error adding movie:", error);
  }
}

async function getMovieWithId2() {
  try {
    const movie = await Movie.findByPk(2);
    return movie ? movie.title : 'Movie not found';
  } catch (error) {
    console.error("Error fetching movie:", error);
  }
}

async function getAllActors() {
  try {
    const actors = await Actor.findAll();
    return actors.map(actor => actor.name);
  } catch (error) {
    console.error("Error fetching actors:", error);
  }
}

async function getAllMoviesFrom2008() {
  try {
    const movies = await Movie.findAll({ where: { year: 2008 } });
    return movies.map(movie => movie.title);
  } catch (error) {
    console.error("Error fetching movies from 2008:", error);
  }
}

async function deleteGenreYouAdded() {
  try {
    await Genre.destroy({ where: { name: 'Horror' } });
    console.log("Genre 'Horror' deleted successfully.");
  } catch (error) {
    console.error("Error deleting genre:", error);
  }
}

async function associateRosarioToEagleEye() {
  try {
    const actor = await Actor.findOne({ where: { name: 'Rosario Dawson' } });
    const movie = await Movie.findOne({ where: { title: 'Eagle Eye' } });
    await movie.addActor(actor);
    console.log("Association added: Rosario Dawson -> Eagle Eye");
  } catch (error) {
    console.error("Error associating actor with movie:", error);
  }
}

async function associateRobertToTropicThunder() {
  try {
    const actor = await Actor.findOne({ where: { name: 'Robert Downey Jr.' } });
    const movie = await Movie.findOne({ where: { title: 'Tropic Thunder' } });
    await movie.addActor(actor);
    console.log("Association added: Robert Downey Jr. -> Tropic Thunder");
  } catch (error) {
    console.error("Error associating actor with movie:", error);
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

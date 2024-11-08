const { Genre, Movie, Actor, MovieActor } = require("./models");

async function insertNewGenre() {
  try {
    const genreName = "Thriller"; // The genre to add

    // Check if the genre already exists
    const existingGenre = await Genre.findOne({ where: { name: genreName } });

    if (existingGenre) {
      console.log(`${genreName} genre already exists.`);
      return;
    }

    // Create the new genre
    await Genre.create({ name: genreName });
    console.log(`${genreName} genre added successfully.`);
  } catch (error) {
    console.error("Error adding new genre:", error);
  }
}

async function insertNewMovie() {
  try {
    const movieDetails = {
      title: "Inception",
      year: 2010,
      genreId: 1, // Assuming genreId=1 is for Action genre
    };

    // Ensure the movie isn't from 2008
    if (movieDetails.year === 2008) {
      console.log("Cannot add movies from the year 2008.");
      return;
    }

    // Check if the movie already exists
    const existingMovie = await Movie.findOne({ where: { title: movieDetails.title } });
    if (existingMovie) {
      console.log(`${movieDetails.title} movie already exists.`);
      return;
    }

    // Create the new movie
    await Movie.create(movieDetails);
    console.log(`${movieDetails.title} movie added successfully.`);
  } catch (error) {
    console.error("Error adding new movie:", error);
  }
}


async function getMovieWithId2() {
  try {
    const movie = await Movie.findByPk(2);

    if (!movie) {
      console.log("Movie with ID = 2 not found.");
      return null; // Return null if movie is not found
    }

    // Return the movie title
    return movie.title;
  } catch (error) {
    console.error("Error fetching movie with ID = 2:", error);
    return null; // Ensure null is returned in case of error
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
    const genreName = "Thriller";

    // Find and delete the genre
    const genre = await Genre.findOne({ where: { name: genreName } });
    if (genre) {
      await genre.destroy();
      console.log(`${genreName} genre deleted successfully.`);
    } else {
      console.log(`${genreName} genre not found.`);
    }
  } catch (error) {
    console.error("Error deleting genre:", error);
  }
}

async function associateRosarioToEagleEye() {
  try {
    const actorName = 'Rosario Dawson';
    const movieTitle = 'Eagle Eye';

    // Find the actor and movie
    const actor = await Actor.findOne({ where: { name: actorName } });
    const movie = await Movie.findOne({ where: { title: movieTitle } });

    if (!actor || !movie) {
      console.log("Actor or Movie not found.");
      return;
    }

    // Create the association
    await actor.addMovie(movie);
    console.log(`${actorName} has been successfully associated with "${movieTitle}".`);
  } catch (error) {
    console.error("Error associating Rosario Dawson with Eagle Eye:", error);
  }
}

async function associateRobertToTropicThunder() {
  try {
    const actorName = 'Robert Downey Jr.';
    const movieTitle = 'Tropic Thunder';

    // Find the actor and movie
    const actor = await Actor.findOne({ where: { name: actorName } });
    const movie = await Movie.findOne({ where: { title: movieTitle } });

    if (!actor || !movie) {
      console.log("Actor or Movie not found.");
      return;
    }

    // Create the association
    await actor.addMovie(movie);
    console.log(`${actorName} has been successfully associated with "${movieTitle}".`);
  } catch (error) {
    console.error("Error associating Robert Downey Jr. with Tropic Thunder:", error);
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

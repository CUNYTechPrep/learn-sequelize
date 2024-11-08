const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
async function insertNewGenre( ) {

  // Add code here
  try {
     const newGenre = 'Romance'
     await Genre.create({
      name: newGenre,
    });
    console.log(`Genre ${newGenre} added successfully.`);
  } catch (error) {
    console.error("Error adding new genre:", error.message);
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
  try {
    const movieDetails = {
      title: "Oppenheimer",
      year: 2023,
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

     await Movie.create({
      title: movieDetails.title,
      year: movieDetails.year, // Note: Make sure it's not 2008
    });
    console.log("Movie added successfully.");
  } catch (error) {
    console.error("Error adding new movie:", error.message);
  }
}

/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  // Add code here
  try {
    const movie =  await Movie.findByPk(2);
    return movie ? movie.title : "Movie not found";
  } catch (error) {
    console.error("Error retrieving movie:", error.message);
  }
}

/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  // Add code here
  try {
    const actors =  await Actor.findAll({
      attributes: ["name"],
    });
    return actors.map(actor => actor.name);
  } catch (error) {
    console.error("Error fetching actors:", error.message);
  }
}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {
  // Add code here
  try {
    const movies =  await Movie.findAll({
      where: {
        year: 2008,
      },
      attributes: ["title"],
    });
    return movies.map(movie => movie.title);
  } catch (error) {
    console.error("Error fetching movies from 2008:", error.message);
  }
}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
async function deleteGenreYouAdded() {
  // Add code here
  try {
    const genre =  await Genre.findOne({
      where: {
        name: newGenre,
      },
    });
    if (genre) {
       await genre.destroy();
      console.log(`Genre ${newGenre} deleted successfully.`);
    } else {
      console.log("Genre not found.");
    }
  } catch (error) {
    console.error("Error deleting genre:", error.message);
  }
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRosarioToEagleEye() {
  // Add code here
  try {
    const actor =  await Actor.findOne({ where: { name: "Rosario Dawson" } });
    const movie =  await Movie.findOne({ where: { title: "Eagle Eye" } });
    if (actor && movie) {
      await movie.addActor(actor);
      console.log("Association added successfully.");
    } else {
      console.log("Actor or movie not found.");
    }
  } catch (error) {
    console.error("Error associating actor with movie:", error.message);
  }
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  // Add code here
  try {
    const actor = await Actor.findOne({ where: { name: "Robert Downey Jr." } });
    const movie = await Movie.findOne({ where: { title: "Tropic Thunder" } });
    if (actor && movie) {
      await movie.addActor(actor);
      console.log("Association added successfully.");
    } else {
      console.log("Actor or movie not found.");
    }
  } catch (error) {
    console.error("Error associating actor with movie:", error.message);
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

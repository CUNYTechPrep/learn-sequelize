const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
async function insertNewGenre() {
  try {
    const [genre, created] = await Genre.findOrCreate({
      where: { name: 'Romance' },
      defaults: { name: 'Romance' },
    });
    console.log(created ? "Genre created." : "Genre already exists.");
  } catch (err) {
    console.log(err);
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
    const [movie, created] = await Movie.findOrCreate({
      where: { title: 'HeartBreakHotel' },
      defaults: {
        title: 'HeartBreakHotel',
        year: "2005",
      },
    });
    console.log(created ? "Movie created." : "Movie already exists.");
  } catch (err) {
    console.log(err);
  }
}



/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  const movie = await Movie.findByPk(2);
  if (movie === null) {
    console.log('Movie not found!');
    return null;
  } else {
    console.log(`Movie title with ID=2: ${movie.title}`);
    return movie.title;
  }
}


/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  try {
    const actors = await Actor.findAll();
    const actorNames = actors.map(actor => actor.name);
    console.log("All Actor Names:", actorNames);
    return actorNames;
  } catch (err) {
    console.log(err);
  }
}


/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {
  try {
    const movies2008 = await Movie.findAll({ where: { year: '2008' } });
    if (movies2008.length === 0) {
      console.log('No movies found from 2008');
    } else {
      const movieTitles = movies2008.map(movie => movie.title);
      console.log("Movies from 2008:", movieTitles);
      return movieTitles;
    }
  } catch (err) {
    console.log(err);
  }
}


/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
async function deleteGenreYouAdded() {
  try {
    const deleted = await Genre.destroy({
      where: { name: 'Romance' },
    });
    console.log(deleted ? "Genre deleted." : "Genre not found.");
  } catch (err) {
    console.log(err);
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
      await actor.addMovie(movie);
      console.log("Associated Rosario Dawson with Eagle Eye.");
    } else {
      console.log("Actor or movie not found.");
    }
  } catch (err) {
    console.log(err);
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
      await actor.addMovie(movie);
      console.log("Associated Robert Downey Jr. with Tropic Thunder.");
    } else {
      console.log("Actor or movie not found.");
    }
  } catch (err) {
    console.log(err);
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

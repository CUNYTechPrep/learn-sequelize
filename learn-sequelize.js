const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
async function insertNewGenre() {
  // Add code here
  try{
    const newGenre = await Genre.create({ name: 'Horror' });
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

  try{
    const newMovie = await Movie.create({ title: 'The Dark Knight', year: 2019 });
    }
    catch (error) {
      console.error(error);
    }

}

/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  // Add code here
  const movie = await Movie.findByPk(id=2);
  return movie.title;
}

/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  // Add code here
  const actors = await Actor.findAll();

  return actors.map(actor => actor.name);

}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {
  // Add code here
  const movies = await Movie.findAll({where: {year: 2008}});
  return movies.map(movie => movie.title);

}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
async function deleteGenreYouAdded() {
  // Add code here
  await Genre.destroy({where: {name: 'Horror'}});

  
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRosarioToEagleEye() {
  // Add code here
  const actor = await Actor.findOne({where: {name: 'Rosario Dawson'}});
  const associatedMovie = await Movie.findOne({where: {title: 'Eagle Eye'}});
  await associatedMovie.addActor(actor);
  

}

async function associateRosarioToID() {
  // Add code here
  const actor = await Actor.findOne({where: {name: 'Will Smith'}});
  const associatedMovie = await Movie.findOne({where: {title: 'Independence Day'}});
  await associatedMovie.addActor(actor);
  

}


/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  // Add code here
  const actor = await Actor.findOne({where: {name: 'Robert Downey Jr.'} });
  const associatedMovie = await Movie.findOne({where: {title: 'Tropic Thunder'}});
  await associatedMovie.addActor(actor);

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

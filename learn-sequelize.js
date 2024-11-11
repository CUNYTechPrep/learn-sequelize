const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
async function insertNewGenre() {
    try {
    // Adding a new genre
    await Genre.create({
      id: 4,
      name: 'SciFi', 
    });
  }catch(e){
    console.log("Error creating genre", e)
  }
}

/*
  Write a function that creates a new Movie in the database
  - currently, there are 5 movies
  - add one more Movie of your choice.
  - the movie CANNOT be from year 2008 (try it to learn about errors)
*/
async function insertNewMovie() {
  await Movie.create({
    id: 6,
    title: 'Blue Beetle',
    year: 2023
  })

}

/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  const movieWithId2 = await Movie.findAll({
    where:{
      id:  2
    }
  })
  return movieWithId2[0].title;
  
}

/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  const actors = await Actor.findAll();

  const actorNames = []

  for(let i = 0; i < actors.length; i++){
      actorNames.push(actors[i].name)
  }

  

  return actorNames;
}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {

  const moviesFrom2008 = await Movie.findAll({
    where:{ year: 2008}
  })


  const movieNamesFrom2008 = [];

  for(let i = 0; i <moviesFrom2008.length; i++ ){
    movieNamesFrom2008.push(moviesFrom2008[i].title)
  }

  return movieNamesFrom2008;
}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
async function deleteGenreYouAdded() {
  await Genre.destroy({
    where:{
      id: 4 
    }
  })
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRosarioToEagleEye() {
  Actor.belongsToMany(Movie, { through: "ActorMovies" });
  Movie.belongsToMany(Actor, { through: "ActorMovies" }); 

  const actor = await Actor.findOne({where:{
    name: 'Rosario Dawson'
  }})

  const movie = await Movie.findOne({where:{title: 'Eagle Eye'}});
  await actor.addMovie(movie)
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  const actor = await Actor.findOne({where:{name: 'Robert Downey Jr.'}})

  const movie = await Movie.findOne({where:{title: 'Tropic Thunder'}});

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

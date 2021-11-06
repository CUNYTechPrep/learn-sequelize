const { Genre, Movie, Actor } = require('./models');


/*
  currently, the genre table only has 3 entries: Action, Comedy, and Drama
  Add one more Genre of your choice.
*/
function insertNewGenre() {
  const newGenre = Genre.create({name: 'Rommance'});
  console.log(newGenre.name);
  return newGenre;
}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {
 const NewMovie = Movie.create({title: "The Avengers", year:2012});
return NewMovie;
}
0
/*
  Return the title of the movie with ID=2
*/
function getMovieWithId2() {
  const getTitle =   Movie.findOne({  where: { id : 2}});
    return getTitle
      .then(getTitle =>{
        return getTitle.title
      });
  
 
}

/*
  Return an array of all the actor names
*/
function getAllActors() {
 const AllActors = Actor.findAll();
 return AllActors
 .then(getNames => {
    return getNames.map(names => names.name)
 })
}

/*
  Return an array of all the movie names from 2008
*/
function getAllMoviesFrom2008() {
  return Movie.findAll({where: {year:2008}})
  .then(actor => {
    return actor.map(a => a.title)
  })
}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {
  const remove = Genre.destroy({where: {name : 'Rommance'}})
  return remove;
}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
*/
function associateRosarioToEagleEye() {
  const newMovie = Movie.findOne({where: {title: 'Eagle Eye' }});
  const person = Actor.findOne({where : {name: 'Rosario Dawson'}})
  return Promise 
    .all([newMovie, person])
    .then(([movieResult, actorResult]) => {
      return movieResult.addActor(actorResult)
    })
}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
function associateRobertToTropicThunder() {
  const newMovie = Movie.findOne({where: {title: 'Tropic Thunder' }});
  const person = Actor.findOne({where : {name: 'Robert Downey Jr.'}})
  return Promise 
  .all([newMovie, person])
  .then(([movieResult, actorResult]) => {
    return movieResult.addActor(actorResult)
  })

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

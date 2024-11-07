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
    const genre = await Genre.create({name:"Roman"})
  } catch (error){
    console.log(error);
  }
}

/*
  Write a function that creates a new Movie in the database
  - currently, there are 5 movies
  - add one more Movie of your choice.
  - the movie CANNOT be from year 2008 (try it to learn about errors)
*/
async function insertNewMovie(moviename) {
  // Add code here
  try{
    const movie = await Movie.create({name: moviename})

  } catch(error){
    console.log(error);
  }
}

/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  // Add code here
  try{
    const id2movie = await Movie.findOne({where:{id: 2}});
    if(id2movie != null){
        return id2movie.title;
    } else {
      return "not found";
    }
  } catch (error){
    console.log(error);
  }
}

/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  // Add code here
  const actor = await Actor.findAll();
  return actor.map(actor=>actor.name);
}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {
  // Add code here
  try{
    const movies = await Movie.findAll({where:{year: 2008} });
    return movies.map(movies=>movies.title);
  }catch(error){
    console.log(error);
  }
}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
async function deleteGenreYouAdded() {
  // Add code here
  try{
    const newGenre = await Genre.findOne({where:{name:"Roman"}});
    await newGenre.destroy();
  }catch (error){
    console.log(error);
  }
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRosarioToEagleEye() {
    const Rosario = await Actor.findOne({where:{name:"Rosario Dawson"}});
    const Eagle = await Movie.findOne({where:{title:"Eagle Eye"}});
    await Eagle.addActor(Rosario);
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  // Add code here
  const Robert = await Actor.findOne({where:{name:"Robert Downey Jr."}});
  const Tropic = await Movie.findOne({where:{title:"Tropic Thunder"}});
  await Tropic.addActor(Robert);
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

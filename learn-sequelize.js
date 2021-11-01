const { Genre } = require("./models");
const { Movie } = require("./models");
const { Actor } = require("./models");
const { index } = require("./models");
/*
  currently, the genre table only has 3 entries: Action, Comedy, and Drama
  Add one more Genre of your choice.
*/
function insertNewGenre() {
	return Genre.create({ name: "Horror" });
}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {
	return Movie.create({ title: "Power Rangers", year: "2019" });
}
/*
  Return the title of the movie with ID=2
*/
function getMovieWithId2() {
	return Movie.findOne({ where: { id: 2 } }).then((data) => data.title);
}

/*
  Return an array of all the actor names
*/
function getAllActors() {
	return Actor.findAll().then((data) => {
		return data.map((actors) => {
			return actors.dataValues.name;
		});
	});
}

/*
  Return an array of all the movie names from 2008
*/
function getAllMoviesFrom2008() {
	return Movie.findAll({ where: { year: 2008 } }).then((data) => {
		return data.map((movieName) => {
			return movieName.dataValues.title;
		});
	});
}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {
	return Genre.destroy({ where: { id: 4 } });
}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
	id:4 of Movies table and id of Actor table
  */
async function associateRosarioToEagleEye() {
	let eagleEye = await Movie.findOne({
		where: {
			title: "Eagle Eye",
		},
	});
	let rosarioDawson = await Actor.findOne({
		where: {
			name: "Rosario Dawson",
		},
	});
	return await eagleEye.addActor(rosarioDawson);
}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
async function associateRobertToTropicThunder() {
	let downeyJr = await Actor.findOne({
		where: {
			name: "Robert Downey Jr.",
		},
	});
	let tropicThunder = await Movie.findOne({
		where: {
			title: "Tropic Thunder",
		},
	});
	return await tropicThunder.addActor(downeyJr);
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

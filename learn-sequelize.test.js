const { Genre, Movie, Actor } = require('./models');
const seed = require('./seed');

const {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
} = require('./learn-sequelize');



describe('2) Model Usage', () => {
  beforeAll(() => {
    return seed();
  })

  test('insert new genre', async () => {
    await insertNewGenre();
    genres = await Genre.findAll();
    expect(genres.length).toBe(4);
  })

  test('insert new Movie', async () => {
    await insertNewMovie();
    movies = await Movie.findAll();
    expect(movies.length).toBe(6);
  })

  test('get movie ID=2', async () => {
    expect(await getMovieWithId2()).toBe("Men in Black II");
  })

  test('get all actors', async () => {
    expect(await getAllActors()).toEqual(["Will Smith", "Rosario Dawson", "Robert Downey Jr."]);
  })

  test('get all movies from 2008', async () => {
    expect(await getAllMoviesFrom2008()).toEqual(["Seven Pounds", "Eagle Eye", "Tropic Thunder"]);
  })

  test('delete genre you added', async () => {
    await deleteGenreYouAdded();
    genres = await Genre.findAll();
    expect(genres.length).toBe(3);
  })

  test('associate rosario with Eagle Eye', async () => {
    await associateRosarioToEagleEye();
    return Actor.findByPk(2)
      .then(r => r.getMovies())
      .then(movies => {
        expect(movies.length).toBe(3);
      })
  })

  test('associate robert with Tropic Thunder', async () => {
    await associateRobertToTropicThunder();
    return Actor.findByPk(3)
      .then(r => r.getMovies())
      .then(movies => {
        expect(movies.length).toBe(1);
      })
  })

  
})
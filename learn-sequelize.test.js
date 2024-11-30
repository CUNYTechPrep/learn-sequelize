const { Genre, Movie, Actor, sequelize } = require("./models");
const seed = require("./seed");

const {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
} = require("./learn-sequelize");

describe("Sequelize Model Usage", () => {
  beforeAll(() => {
    return seed();
  });

  afterAll(() => {
    return sequelize.close();
  });

  test("insert new genre", async () => {
    await insertNewGenre();
    let genres = await Genre.findAll();
    expect(genres.length).toBe(4);
  });

  test("insert new Movie", async () => {
    await insertNewMovie();
    let movies = await Movie.findAll();
    expect(movies.length).toBe(6);
  });

  test("get movie ID=2", async () => {
    expect(await getMovieWithId2()).toBe("Thor");
  });

  test("get all actors", async () => {
    expect((await getAllActors()).sort()).toEqual(
      ["Will Smith", "Rosario Dawson", "Denzel Washington"].sort()
    );
  });

  test("get all movies from 2008", async () => {
    expect((await getAllMoviesFrom2008()).sort()).toEqual(
      ["Seven Pounds", "Eagle Eye", "Tropic Thunder"].sort()
    );
  });

  test("delete genre you added", async () => {
    await deleteGenreYouAdded();
    let genres = await Genre.findAll();
    expect(genres.length).toBe(3);
  });

  test("associate rosario with Eagle Eye", async () => {
    await associateRosarioToEagleEye();
    return Actor.findByPk(2)
      .then((r) => r.getMovies())
      .then((movies) => {
        expect(movies.length).toBe(3);
        expect(movies.map((m) => m.title)).toContain("Eagle Eye");
      });
  });

  test("associate robert with Tropic Thunder", async () => {
    await associateRobertToTropicThunder();
    return Actor.findByPk(3)
      .then((r) => r.getMovies())
      .then((movies) => {
        expect(movies.length).toBe(1);
        expect(movies.map((m) => m.title)).toContain("Tropic Thunder");
      });
  });
});

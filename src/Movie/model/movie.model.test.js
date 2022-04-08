const movieModel = require('./movie.model')

test("Delete returns true", () => {
    const result = movieModel.deleteMovie({"title": "Movie 2"});
    expect(result).toBe(true);
});
const Movie = require("../models/Movie");

const moviesService = {
    async getMovies() {
        try {
            const movies = await Movie.find(); 
            return movies;
        } catch (error) {
            console.error("Fallo en la carga de películas:", error.message);
            return null;
        }
    },

    async createMovie({ title, year, director, duration, genre, rate, poster }) {
        try {
            const newMovie = await Movie.create({ title, year, director, duration, genre, rate, poster });
            return newMovie;
        } catch (error) {
            console.error("Error al crear la película:", error.message);
            return null; 
        }
    }
};

module.exports = moviesService;

const moviesService = require("../services/moviesService");

const movieController = {
    async getAllMovies(req, res) {
        try {
            const movies = await moviesService.getMovies();
            if (movies === null) {
                return res.status(500).json({ error: "Error al obtener las películas" });
            }
            res.status(200).json(movies);
        } catch (error) {
            console.error("Error al obtener las películas:", error.message);
            res.status(500).json({ error: "Error al obtener las películas" });
        }
    },

    async createMovie(req, res) {
        try {
            const { title, year, director, duration, genre, rate, poster } = req.body;
            const newMovie = await moviesService.createMovie({ title, year, director, duration, genre, rate, poster });
            
            if (newMovie === null) {
                return res.status(500).json({ error: "Error al crear la película" });
            }
            
            res.status(201).json({ message: "Película creada exitosamente", movie: newMovie });
        } catch (error) {
            console.error("Error al crear la película:", error.message);
            res.status(500).json({ error: "Error al crear la película" });
        }
    }
};

module.exports = movieController;

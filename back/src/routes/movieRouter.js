const {Router} =require("express");
const movieController = require("../controllers/movieController")
const validateData = require("../middlewares/validateData")


const movieRouter= Router();

movieRouter.get("/", movieController.getAllMovies);

movieRouter.post("/", validateData, movieController.createMovie);

module.exports= movieRouter;
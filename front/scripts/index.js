const getMovies = require("./getMovies");
const movieFormData= require("./movieFormData")



document.addEventListener("DOMContentLoaded",()=>{
    getMovies()


const boton= document.getElementById("botonEnvio")
boton?.addEventListener("click", movieFormData)

const movieForm= document.getElementById("movieForm");
const clearButton= document.getElementById("clear");
clearButton?.addEventListener("click", ()=>{movieForm.reset()})
})
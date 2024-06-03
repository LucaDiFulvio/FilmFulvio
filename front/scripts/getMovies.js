const axios= require("axios");
const cardGenerator= require("./cardGenerator")




async function getMovies(){
  try { 
   const {data} =await axios.get("http://localhost:3000/movies")
   data.map(movie=>cardGenerator(movie))
  } catch (error) {
    errorElement= document.createElement("h3");
    errorElement.innerText= `${error.message}`;
    cardContainer?.appendChild(errorElement);
  }
  
}

module.exports=getMovies;


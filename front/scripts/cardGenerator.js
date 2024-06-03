const cardContainer= document.getElementById("cardsContainer");

function cardGenerator({title, year, director, duration, genre, rate, poster }){

    const movieCard = document.createElement("div");
    movieCard.className = "movieCard card my-card col-sm-3 col-md-3 col-lg-3 border border-black border-5s rounded container-fluid";
    movieCard.innerHTML = 
    `<img src="${poster}" class="img-fluid card-img-top img-thumbnail rounded mx-auto d-block mb-1" alt="${title}"/>
    <div class="card-body text-center">
      <h3 class="card-title"><a href="#pordefinir">${title}</a></h3>
      <p class="card-text ">Generos: ${genre.join(" - ")}.</p>
    </div>
    <ul class="list-group list-group-flush text-center">
      <li class="list-group-item "><small>Director: ${director}</small></li>
      <li class="list-group-item"><small>Duracion: ${duration}</small></li>
      <li class="list-group-item"><small>Año: ${year}</small></li>
      <li class="list-group-item"><small>Rating: ${rate}</small></li>
    </ul>`
    ;
    cardContainer?.appendChild(movieCard)
  }


module.exports= cardGenerator;
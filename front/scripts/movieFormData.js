const submitForm= require("./submitForm.js")

function movieFormData(e) {
    e.preventDefault()
    const formData = {
        title: document.getElementById('titulo').value,
        year: document.getElementById('year').value,
        director: document.getElementById('director').value,
        duration: document.getElementById('duracion').value,
        genre: document.getElementById('genero').value.split(" "),
        rate: document.getElementById('calificacion').value,
        poster: document.getElementById('poster').value
    };
    console.log(formData)
    submitForm(formData)
    return formData;
}


module.exports= movieFormData
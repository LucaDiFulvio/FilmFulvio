const axios = require('axios');

async function  submitForm(formData) { 
 
        await axios.post('http://localhost:3000/movies', formData)
            .then(response => {
                console.log('Película creada exitosamente:', response.data);
            })
            .catch(error => {
                console.error('Error al crear la película:', error.message);
            });
    };


module.exports = submitForm;

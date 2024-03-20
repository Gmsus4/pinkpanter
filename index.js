const express = require('express');
const moment = require('moment');
const app = express();

// Ruta de la API
app.get('/imagen', (req, res) => {
    // Obtener la hora actual
    const horaActual = moment().format('H');

    // Determinar qué imagen enviar dependiendo de la hora
    let imagen = '';
    if (horaActual >= 6 && horaActual < 12) {
        imagen = 'mañana.jpg'; // Cambia 'mañana.jpg' por la imagen de la mañana
    } else if (horaActual >= 12 && horaActual < 18) {
        imagen = 'tarde.jpg'; // Cambia 'tarde.jpg' por la imagen de la tarde
    } else {
        imagen = 'https://i.pinimg.com/originals/17/4f/ee/174fee9be9414ad86e1cdd277db94e06.png'; // Cambia 'noche.jpg' por la imagen de la noche
    }

    // Construir la URL de la imagen
    // const imageURL = `http://localhost:3000/imagenes/${imagen}`;

    // Enviar la URL como respuesta
    res.json({
        url: imagen
    });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

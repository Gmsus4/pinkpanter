const express = require('express');
const moment = require('moment');
require('dotenv').config();

//Crear el servidor de express
const app = express();

//Rutas
app.get('/imagen', (req, res) => {
    // Obtener la hora actual
    const now = moment();
    
    // Definir los momentos del día
    const timeStudy = moment().hour(7).minute(0);
    const timeBarrer = moment().hour(8).minute(0);
    const timeStudy2 = moment().hour(8).minute(10);
    const timeDesayunar = moment().hour(9).minute(10);
    const timeStudy3 = moment().hour(9).minute(20);
    const timeLavarTrastes = moment().hour(10).minute(20);
    const timeStudy4 = moment().hour(10).minute(30);
    const timeStudy5 = moment().hour(11).minute(40);
    const timeStudy6 = moment().hour(12).minute(50);
    const timeStudy7 = moment().hour(14).minute(0);
    const timeComer = moment().hour(15).minute(0);
    const timeStudy8 = moment().hour(15).minute(30);
    const timeCaminar = moment().hour(16).minute(30);
    const timeEjercicio = moment().hour(18).minute(0);
    const timeDormir = moment().hour(22).minute(0);

    let imageURL = '';

    // Comparar la hora actual con los momentos del día usando switch
    switch (true) {
        case now.isBetween(timeStudy, timeBarrer):
            imageURL = 'https://i.pinimg.com/originals/3e/4f/b0/3e4fb08a0ff59d5a8d0c137870e3ce57.jpg';
            break;
        case now.isBetween(timeBarrer, timeStudy2):
            imageURL = 'https://i.pinimg.com/originals/d8/d8/19/d8d819cadd4f67939b1f5c9cd35c7512.jpg';
            break;
        case now.isBetween(timeStudy2, timeDesayunar):
            imageURL = 'https://i.pinimg.com/originals/3e/4f/b0/3e4fb08a0ff59d5a8d0c137870e3ce57.jpg';
            break;
        case now.isBetween(timeStudy3, timeLavarTrastes):
            imageURL = 'https://i.pinimg.com/originals/3e/4f/b0/3e4fb08a0ff59d5a8d0c137870e3ce57.jpg';
            break;
        case now.isBetween(timeLavarTrastes, timeStudy4):
            imageURL = 'https://i.pinimg.com/originals/d8/d8/19/d8d819cadd4f67939b1f5c9cd35c7512.jpg';
            break;
        case now.isBetween(timeStudy4, timeStudy5):
            imageURL = 'https://i.pinimg.com/originals/3e/4f/b0/3e4fb08a0ff59d5a8d0c137870e3ce57.jpg';
            break;
        case now.isBetween(timeStudy5, timeStudy6):
            imageURL = 'https://i.pinimg.com/originals/3e/4f/b0/3e4fb08a0ff59d5a8d0c137870e3ce57.jpg';
            break;
        case now.isBetween(timeStudy6, timeStudy7):
            imageURL = 'https://i.pinimg.com/originals/3e/4f/b0/3e4fb08a0ff59d5a8d0c137870e3ce57.jpg';
            break;
        case now.isBetween(timeStudy7, timeComer):
            imageURL = 'https://i.pinimg.com/originals/3e/4f/b0/3e4fb08a0ff59d5a8d0c137870e3ce57.jpg';
            break;
        case now.isBetween(timeComer, timeStudy8):
            imageURL = 'https://i.pinimg.com/originals/c5/e1/37/c5e1377dfe1e60ffba4c523b1ce69f04.jpg';
            break;
        case now.isBetween(timeStudy8, timeCaminar):
            imageURL = 'https://i.pinimg.com/originals/3e/4f/b0/3e4fb08a0ff59d5a8d0c137870e3ce57.jpg';
            break;
        case now.isBetween(timeCaminar, timeEjercicio):
            imageURL = 'https://i.pinimg.com/originals/67/5e/35/675e35ba3ff169ad726a1b29af80c178.jpg';
            break;
        case now.isBetween(timeEjercicio, timeDormir):
            imageURL = 'https://i.pinimg.com/originals/33/40/e6/3340e6101eb3d8ccc40009a7888162f3.gif';
            break;
        case now.isSameOrAfter(timeDormir):
            imageURL = 'https://i.pinimg.com/originals/17/4f/ee/174fee9be9414ad86e1cdd277db94e06.png';
            break;
        default:
            res.send('No hay ninguna imagen disponible en este momento.');
            return;
    }

    // Enviar la URL de la imagen correspondiente
    // res.send(imageURL);
    res.json({
        url: imageURL
    })
});

//Escuchar peticiones
app.listen(process.env.PORT, ()=> {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});
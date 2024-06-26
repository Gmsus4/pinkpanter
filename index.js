const express = require('express');
const moment = require('moment');

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
        case now.isSameOrAfter(timeStudy):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949493/pink%20panter/elyn7smg9l8nmuh15fni.jpg';
            break;
        // case now.isSameOrAfter(timeBarrer):
        //     imageURL = 'https://i.pinimg.com/originals/d8/d8/19/d8d819cadd4f67939b1f5c9cd35c7512.jpg';
        //     break;
        case now.isSameOrAfter(timeStudy2):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949493/pink%20panter/elyn7smg9l8nmuh15fni.jpg';
            break;
        case now.isSameOrAfter(timeDesayunar):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949494/pink%20panter/hk94itwdndeycgc49zli.jpg';
            break;
        case now.isSameOrAfter(timeStudy3):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949493/pink%20panter/elyn7smg9l8nmuh15fni.jpg';
            break;
        case now.isSameOrAfter(timeLavarTrastes):
            imageURL = 'https://i.pinimg.com/originals/d8/d8/19/d8d819cadd4f67939b1f5c9cd35c7512.jpg';
            break;
        case now.isSameOrAfter(timeStudy4):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949493/pink%20panter/elyn7smg9l8nmuh15fni.jpg';
            break;
        case now.isSameOrAfter(timeStudy5):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949493/pink%20panter/elyn7smg9l8nmuh15fni.jpg';
            break;
        case now.isSameOrAfter(timeStudy6):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949493/pink%20panter/elyn7smg9l8nmuh15fni.jpg';
            break;
        case now.isSameOrAfter(timeStudy7):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949493/pink%20panter/elyn7smg9l8nmuh15fni.jpg';
            break;
        case now.isSameOrAfter(timeComer):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949494/pink%20panter/hk94itwdndeycgc49zli.jpg';
            break;
        case now.isSameOrAfter(timeStudy8):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949493/pink%20panter/elyn7smg9l8nmuh15fni.jpg';
            break;
        case now.isSameOrAfter(timeCaminar):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949486/pink%20panter/w9cju0jtbfoqpakmtnit.jpg';
            break;
        // case now.isSameOrAfter(timeEjercicio):
        //     imageURL = 'https://i.pinimg.com/originals/33/40/e6/3340e6101eb3d8ccc40009a7888162f3.gif';
        //     break;
        case now.isSameOrAfter(timeDormir):
            imageURL = 'https://res.cloudinary.com/dozzu7xhx/image/upload/v1710949484/pink%20panter/mdqksctijruxlnd2b3vd.jpg';
            break;
        default:
            res.send('No hay ninguna imagen disponible en este momento.');
            return;
    }

    // Enviar la URL de la imagen correspondiente
    // res.send(imageURL);
    res.json({
        url: imageURL
    });
});

//Escuchar peticiones
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

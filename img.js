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

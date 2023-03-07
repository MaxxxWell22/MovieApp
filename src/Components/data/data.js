import avengers from '../../assets/Avengers.png';
import Photo1 from '../../assets/photo1.jpg';
import Avengers2 from '../../assets/Avengers2.jpg';
import Photo2 from '../../assets/photo2.jpg';
import Photo3 from '../../assets/photo3.jpg';
import Photo4 from '../../assets/photo4.jpg';
import Photo5 from '../../assets/photo5.jpg';
import Photo6 from '../../assets/photo6.jpg';

const DATA = [
    {
        id: '1',
        name: 'Avengers',
        logo: avengers,
        mainImage: 'https://images.hdqwalls.com/wallpapers/avengers-endgame-2019-official-poster-th.jpg',
        year: 2019,
        limitAge: '12+',
        rating: 7.89,
        duration: '1h 56min',
        description: 'Оставшиеся в живых члены команды Мстителей и их союзники должны разработать новый план, который поможет противостоять разрушительным действиям могущественного титана Таноса. После наиболее масштабной и трагической битвы в истории они не могут допустить ошибку.',
        photos: [
            'https://d23.com/app/uploads/2019/08/1180w-600h_081319_avengers-endgame-facts-780x440.jpg',
            'https://wallpapercrafter.com/desktop/74687-avengers-endgame-hd-superheroes-artwork-digital-art-movies.jpg',
            'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/04/avengers-endgame-1619486515.jpg',
            'https://www.gamespot.com/a/uploads/screen_kubrick/1582/15828986/3505175-endgame%20head.jpg',
            'https://www.soyuz.ru/public/uploads/files/2/7238820/20181225150435d52c48ed7d.jpg',
            'https://www.soyuz.ru/public/uploads/files/2/7360075/20190614175003d7c1a14523.jpg',
            'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1642096/cff2db42d373796ffe875a92e243fb25/960x540',
            'https://www.soyuz.ru/public/uploads/files/2/7261332/201904071411306579971618.jpg',
        ],
    },
];

export { DATA }

const dataSlider = [
    {
        id: '1',
        photo: Photo1,
        name: 'Avatar',
        genre: 'Фентези',
        date: '2009',
        duration: '162m',
        grade: '8.8'
    },
    {
        id: '2',
        photo: Avengers2,
        name: 'Avengers',
        genre: 'Фантастика',
        date: '2019',
        duration: '185m',
        grade: '8.2'
    },
    {
        id: '3',
        photo: Photo2,
        name: 'Titanic',
        genre: 'Драма',
        date: '1997',
        duration: '250m',
        grade: '8.4'
    },
    {
        id: '4',
        photo: Photo3,
        name: 'Star Wars',
        genre: 'Фентези',
        date: '2015',
        duration: '135m',
        grade: '8.2'
    },
    {
        id: '5',
        photo: Photo4,
        name: 'Spider-man',
        genre: 'Фантастика',
        date: '2021',
        duration: '130m',
        grade: '8.7'
    },
    {
        id: '6',
        photo: Photo5,
        name: 'Jurassic World',
        genre: 'Фантастика',
        date: '2018',
        duration: '130m',
        grade: '7.2'
    },
    {
        id: '7',
        photo: Photo6,
        name: 'The Lion King',
        genre: 'Драма',
        date: '2019',
        duration: '120m',
        grade: '8.5'
    },
];

export { dataSlider }
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { FilmFavorite } from '../FilmFavorite/FilmFavorite';
import { setFilms } from "../../../Components/redux/films/films";
import { Similar } from './Similar/Similar';
import styles from './FilmPage.module.scss';


const FilmPage = ({ dataInfoFilm, setInfoFilm, items }) => {
    const film = useSelector((state) => state.films.films);
    const dispatch = useDispatch;
    const navigate = useNavigate();

    if (!film) return null

    const handleBack = (e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate('/tops');
    }

    const handleClick = (e) => {
        e.preventDefault();
        setInfoFilm(film.filmId);
        dispatch(setFilms(film));
        navigate(`${film.nameRu}`);
    }

    return (
        <div className={styles.filmPage} style={{
            backgroundImage:
                `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${film.posterUrl})`
        }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <button className={styles.back} onClick={handleBack}>
                    <p href='/tops'><i className='bx bx-left-arrow-alt'></i>Назад к списку</p>
                </button>
                <FilmFavorite film={film} />
            </div>
            <div className={styles.film}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <img className={styles.poster} src={film.posterUrlPreview} />
                    </div>
                    <div className={styles.right}>
                        <div style={{ display: 'flex' }}>
                            <h3 style={{ color: 'white', fontWeight: 'bold' }}>Слоган: </h3>
                            <h3 style={{ marginLeft: '30px', alignItems: 'center' }}>{dataInfoFilm.slogan}.</h3>
                        </div>
                        <h4 style={{ marginTop: '40px' }}>
                            <p style={{ color: 'white', fontWeight: 'bold' }}>Краткое описание: </p>
                            <p>{dataInfoFilm.description}</p>
                        </h4>
                    </div>
                </div>
            </div>
            <div style={{ position: 'relative', left: '0', top: '0', zIndex: '1', color: 'white' }}>
                <h1 style={{ fontSize: 'calc(20px + 9 * (100vw / 1080))' }}>Похожие: </h1>
            </div>
            <div className={styles.similar}>
                {items.map(item => (
                    <Similar key={item.filmId} item={item} setInfoFilm={setInfoFilm} onClick={handleClick} />
                ))}
            </div>
        </div>
    );
};

export { FilmPage } 
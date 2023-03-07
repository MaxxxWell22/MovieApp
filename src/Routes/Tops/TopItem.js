import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setFilms } from "../.././Components/redux/films/films";
import { FilmFavorite } from "./FilmFavorite/FilmFavorite";
import styles from './Tops.module.scss';

const TopItem = ({ film, setInfoFilm }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        setInfoFilm(film.filmId);
        dispatch(setFilms(film));
        navigate(`${film.nameRu}`);
    }

    return (
        <div className={styles.body} onClick={handleClick}>
            <div className={styles.parent}>
                <div className={styles.singlCart}>
                    <div className={styles.front}>
                        {(() => {
                            if (film.rating <= 8.5) {
                                return (
                                    <div className={styles.rateLow}>
                                        {film.rating}
                                    </div>
                                )
                            } else if (film.rating >= 8.6) {
                                return (
                                    <div className={styles.rateHeight}>
                                        {film.rating}
                                    </div>
                                )
                            }
                        })()}
                        <img className={styles.img} src={film.posterUrl} />
                    </div>
                    <div className={styles.back}>
                        <div>
                            <FilmFavorite onClick={handleClick} film={film} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.name}>
                                <h3>
                                    {film.nameRu}
                                </h3>
                            </div>
                            <span>
                                Cтрана: <b>{film.countries[0].country}</b>
                            </span>
                            <span>
                                Год: <b>{film.year}</b>
                            </span>
                            <span>
                                Жанр: <b>{film.genres[0].genre}</b>
                            </span>
                            <span>
                                Длительность: <b>{film.filmLength}</b>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { TopItem }
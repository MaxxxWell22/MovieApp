import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { FilmFavoriteTwo } from '../FilmFavoriteTwo/FilmFavoriteTwo';
import { setSimilars } from '../../../Components/redux/similar/similar';
import { Similar } from './Similar/Similar';
import styles from './FilmPage.module.scss';

const FilmPageTwo = ({ dataInfoFilm, setInfoFilm, items }) => {
    const similar = useSelector((state) => state.similars.similars);
    const dispatch = useDispatch;
    const navigate = useNavigate();

    if (!similar) return null

    const handleBack = (e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate('/tops');
    }

    const handleClick = (e) => {
        e.preventDefault();
        setInfoFilm(similar.filmId);
        dispatch(setSimilars(similar));
        navigate(`${similar.nameRu}`);
    }

    return (
        <div className={styles.filmPage} style={{
            backgroundImage: `
        linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${similar.posterUrl})
        ` }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <button className={styles.back} onClick={handleBack}>
                    <p href='/tops'><i className='bx bx-left-arrow-alt'></i>Назад к списку</p>
                </button>
                <FilmFavoriteTwo similar={similar} />
            </div>
            <div className={styles.film}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <img className={styles.poster} src={similar.posterUrlPreview} />
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

export { FilmPageTwo } 
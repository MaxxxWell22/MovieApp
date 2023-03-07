import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setFilms } from "../../../../Components/redux/films/films";
import styles from './FavoritePage.module.scss';


const Page = ({ item, setInfoFilm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setInfoFilm(item.filmId);
    dispatch(setFilms(item));
    navigate(`/tops/${item.nameRu}`);
  }

  return (
    <div className={styles.child} onClick={handleClick}>
      <div className={styles.content}>
        <img className={styles.photoFavorite} src={item.posterUrl} />
      </div>
    </div>
  );
};

export { Page }
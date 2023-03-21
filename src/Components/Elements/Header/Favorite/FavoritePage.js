import { useSelector } from "react-redux";
import { Page } from "./Page";
import styles from './FavoritePage.module.scss';

const FavoritePage = ({ setInfoFilm }) => {
  const items = useSelector(state => state.favorites.favorites)

  if (items.length < 1) {
    return (
      <h1 style={{ color: 'white', textAlign: 'center' }}>Ваш список избранного пуст 😢</h1>
    )
  } else {
    return (
      <div className={styles.parent}>
        <div className={styles.parentTwo}>
          {items.map((item) => <Page key={item.filmId} item={item} setInfoFilm={setInfoFilm} />)}
        </div>
      </div>
    );
  }
};

export { FavoritePage }
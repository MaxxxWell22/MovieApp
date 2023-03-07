import { useDispatch } from 'react-redux';
import { setSimilars } from '../../../../Components/redux/similar/similar';
import { useNavigate } from 'react-router';
import styles from './Similar.module.scss';

const Similar = ({ item, setInfoFilm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setInfoFilm(item.filmId);
    dispatch(setSimilars(item));
    navigate(`/similar/${item.nameRu}`);
  }

  return (
    <div className={styles.similar}>
      <div className={styles.body} onClick={handleClick}>
        <div className={styles.parent}>
          <div className={styles.singlCart}>
            <div className={styles.front}>
              <img className={styles.img} src={item.posterUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Similar }
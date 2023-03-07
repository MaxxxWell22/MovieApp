import { useSelector, useDispatch } from "react-redux";
import { ButtonFavotite } from "../FilmFavorite/ButtonFavorite";
import { setItemsFavorites, deleteItemsFavorites } from "../../../Components/redux/favorites/favorites";

const FilmFavoriteTwo = ({ similar }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favorites.favorites);
  const isFavorites = items.some((favorite) => favorite.filmId === similar.filmId);

  const addFavorites = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isFavorites) {
      dispatch(deleteItemsFavorites(similar.filmId));
    } else {
      dispatch(setItemsFavorites(similar))
    }
  };

  return (
    <div>
      <ButtonFavotite
        type={isFavorites ? "secondary" : "primary"}
        onClick={addFavorites}
      >
        {isFavorites ?
          <i style={{ fontSize: '25px' }} className='bx bx-checkbox-minus'></i>
          : <i style={{ fontSize: '25px' }} className='bx bx-plus'></i>
        }
        <span style={{ alignSelf: 'center', textAlign: 'center', marginLeft: '5px' }}>
          {isFavorites ? "Убрать" : "В Избранное"}
        </span>
      </ButtonFavotite>
    </div>
  );
};

export { FilmFavoriteTwo }
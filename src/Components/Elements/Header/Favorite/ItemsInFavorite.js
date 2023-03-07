import styles from './ItemsInFavorite.module.scss';

const ItemsInFavorite = ({ quantity = 0 }) => {
  return quantity > 0 ? (
    <div className={styles.items}>
      {quantity}
    </div>
  ) : null
};

export { ItemsInFavorite }
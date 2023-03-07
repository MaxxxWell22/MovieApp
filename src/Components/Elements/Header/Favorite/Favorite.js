import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ItemsInFavorite } from './ItemsInFavorite';
import { useNavigate } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';
import styles from './ItemsInFavorite.module.scss';

const Favorite = () => {
    const items = useSelector((state) => state.favorites.favorites)
    const navigate = useNavigate();

    const handleClick = useCallback((e) => {
        e.stopPropagation()
        e.preventDefault()
        navigate('/order')
    }, [navigate])

    return (
        <div className={styles.notification}>
            <div onClick={handleClick}>
                <ItemsInFavorite quantity={items.length} />
                <BsHeartFill style={{ fontSize: '25px', color: 'red' }} />
            </div>
        </div>
    );
};

export { Favorite }
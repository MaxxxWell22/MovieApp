import { Favorite } from './Favorite/Favorite';
import { useNavigate } from 'react-router';
import styles from './Header.module.scss';

const Header = () => {
    const navigate = useNavigate();

    const handleMain = (e) => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <div className={styles.header}>
            <div>
                <a style={{ cursor: 'pointer' }} onClick={handleMain}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Kinopoisk-logo.svg/2560px-Kinopoisk-logo.svg.png"
                        alt="Netflix"
                        height="50"
                        width="150"
                    />
                </a>
            </div>
            <a href='/order'><Favorite /></a>
        </div>
    );
};

export { Header }
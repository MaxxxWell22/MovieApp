import { useNavigate } from 'react-router';
import styles from './Sidebar.module.scss';

const Sidebar = ({ isSideBarShow, setIsSideBarShow }) => {
    const navigate = useNavigate();
    const handleTops = (e) => {
        e.preventDefault();
        navigate('/tops')
    }

    return (
        <div className={styles.sidebar}>
            <button onClick={() => setIsSideBarShow(!isSideBarShow)} style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <i className={`bx bx-${isSideBarShow ? 'x' : 'menu'}`}></i>
            </button>
            <ul className={isSideBarShow ? styles.show : ''}>
                <li>
                    <a style={{ cursor: 'pointer' }} onClick={handleTops}>Топ-100</a>
                </li>
            </ul>
        </div>
    );
};

export { Sidebar }
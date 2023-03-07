import styles from './Button.module.scss';

const Button = ({ children }) => {
    return (
        <button
            className={styles.button}
            style={{ justifyContent: 'center', flexDirection: 'row' }}
        >
            {children}
        </button>
    );
};

export { Button }
import classNames from 'classnames';
import './Button.css';

export const ButtonFavotite = ({ onClick, children, type }) => {
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
    });

    return (
        <button
            className={btnClass}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
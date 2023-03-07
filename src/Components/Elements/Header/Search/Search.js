import styles from './Search.module.scss';

const Search = ({ setSearch }) => {
    return (
        <div className={styles.search}>
            <div>
                <i className="bx bx-search-alt"></i>
                <input
                    placeholder="Поиск"
                    type='text'
                    className='search-input'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
    );
};

export { Search }
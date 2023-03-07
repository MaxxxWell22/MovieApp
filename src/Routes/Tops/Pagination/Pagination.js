import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ pageNumber, setPageNumber }) => {
    return (
        <ReactPaginate
            containerClassName='pagination'
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            nextLabel='>'
            breakLabel='...'
            previousLabel='<'
            nextClassName={styles.pageItem}
            previousClassName={styles.pageItem}
            pageClassName={styles.pageItem}
            pageLinkclassName={styles.pageLink}
            activeClassName={styles.active}
            onPageChange={(data) => { setPageNumber(data.selected + 1) }}
            pageCount='5'
        />
    );
};

export { Pagination }
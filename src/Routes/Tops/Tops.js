import { Sidebar } from "../../Components/UI/Sidebar/Sidebar";
import { TopItem } from "./TopItem";
import { useState } from "react";
import { Pagination } from "./Pagination/Pagination";
import styles from './Tops.module.scss';

const Tops = ({ films, pageNumber, setPageNumber, setInfoFilm }) => {
    const [isSideBarShow, setIsSideBarShow] = useState(false);
    console.log(films)

    return (
        <div className={styles.wrapper}>
            <Sidebar isSideBarShow={isSideBarShow} setIsSideBarShow={setIsSideBarShow} />
            <div className={styles.childOne}>
                <h1>Top <span>100</span> All Time</h1>
                <div className={styles.childTwo}>
                    {films?.map(film => (
                        <TopItem setInfoFilm={setInfoFilm} className={styles.childWrapper} film={film} key={film.filmId} />
                    ))}
                </div>
                <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
            </div>
        </div>
    );
};

export { Tops }
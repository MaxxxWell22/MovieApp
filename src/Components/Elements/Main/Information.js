import { Button } from '../../UI/Button/Button';
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import styles from './Information.module.scss';


const Information = ({ movie }) => {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(1);

    const openModal = () => {
        setModal(!modal);
    };

    const spinner = () => {
        setVideoLoading(!videoLoading);
    };

    return (
        <div className={styles.info}>
            <div className={styles.additional}>
                <span>{movie.year}</span>
                <span style={{ border: '3px solid #6b6a69', borderStyle: 'inset' }}>
                    {movie.limitAge}
                </span>
                <span>{movie.rating}</span>
                <span>{movie.duration}</span>
            </div>

            <div className={styles.description}><h4>{movie.description}</h4></div>

            <div style={{ width: 'calc(120px + 8 * (100vw/1080))' }} onClick={openModal}>
                {modal ? (
                    <section className={styles.modal__bg}>
                        <div className={styles.modal__align}>
                            <div className={styles.modal__content} modal={modal}>
                                <IoCloseOutline
                                    className={styles.modal__close}
                                    arial-label="Close modal"
                                    onClick={setModal}
                                />
                                <div className={styles.modal__videoAlign}>
                                    {videoLoading ? (
                                        <div className={styles.modal__spinner} />
                                    ) : null}
                                    <iframe
                                        className="modal__video-style"
                                        onLoad={spinner}
                                        loading="lazy"
                                        width="800"
                                        height="500"
                                        src="https://www.youtube.com/embed/TcMBFSGVi1c"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                <Button>
                    <i className='bx bx-play' style={{ color: '#c62e21' }}></i>
                    <span className={styles.buttonText} style={{ display: 'flex', alignSelf: 'center' }}>Play</span>
                </Button>
            </div>
        </div>
    );
};

export { Information }
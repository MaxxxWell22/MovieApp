import React from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Avengers1 from '../../../../assets/Avengers1.jpg'
import Avengers2 from '../../../../assets/Avengers2.jpg'
import Avengers3 from '../../../../assets/Avengers3.jpg'
import Avengers4 from '../../../../assets/Avengers4.jpg'
import Avengers5 from '../../../../assets/Avengers5.jpg'
import Avengers6 from '../../../../assets/Avengers6.jpg'
import Avengers7 from '../../../../assets/Avengers7.jpg'
import Avengers8 from '../../../../assets/Avengers8.jpg'
import styles from './Episodes.module.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

let avangerPhotos = [
    Avengers1,
    Avengers2,
    Avengers3,
    Avengers4,
    Avengers5,
    Avengers6,
    Avengers7,
    Avengers8
]

const Episodes = () => {
    return (
        <div className={styles.episodes}>
            <div className={styles.carouselParent}>
                <div className={styles.gallery}>
                    <h3><i className='bx bx-photo-album' ></i>Film Footage</h3>
                </div>
            </div>
            <div className={styles.container}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }
                    }
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className={styles.swiperConteiner}
                >
                    {avangerPhotos.map(photo => (
                        <SwiperSlide key={photo} className={styles.swiperSlide}>
                            <img src={photo} style={{ width: '100%', height: '100%' }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
        </div>
    );
};

export { Episodes }
import { DATA } from '../../data/data';
import { dataSlider } from '../../data/data';
import { Information } from './Information';
import { Sidebar } from '../../UI/Sidebar/Sidebar';
import { SliderContent } from './SliderContent/SliderContent';
import { BottonNavigation } from '../../UI/BottonNavigation/BottonNavigation';
import { Episodes } from '../../Elements/Main/Episodes/Episodes';
import { useState } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCrown } from 'react-icons/fa';
import styles from './Main.module.scss';
import 'swiper/css';

const Main = () => {
    const [isSideBarShow, setIsSideBarShow] = useState(false);
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className={styles.wrapper}>
            <Sidebar isSideBarShow={isSideBarShow} setIsSideBarShow={setIsSideBarShow} />

            <div className={styles.wrapperChild}>
                <div className={styles.mainOne}>
                    <Swiper
                        direction='vertical'
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={1500}
                        modules={[Autoplay]}
                        autoplay={{ delay: 1500000, disableOnInteraction: false }}
                        style={{ width: '100%', height: '50vh', marginLeft: '0px', borderRadius: '10px' }}
                    >
                        {dataSlider.map(item => (
                            <SwiperSlide key={item.id} style={{ overflow: 'hidden', borderRadius: '10px' }}>
                                <div className={styles.example} style={{
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)),url(${item.photo})`,
                                    borderRadius: '10px'
                                }}>
                                    <SliderContent key={item.id} item={item} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <div>
                        <FaCrown style={{ fontSize: '25px', color: 'orange' }}></FaCrown>
                    </div>
                    <h2 style={{ marginLeft: '5px', color: 'white' }}>Most popular movie</h2>
                </div>
                <div className={styles.main}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url(${DATA[0].mainImage})`,
                        width: '100%', opacity: '1'
                    }}
                >
                    <img className={styles.logo} src={DATA[0].logo} alt={DATA[0].name} />
                    {(() => {
                        if (activeTab === 1) {
                            return <Information movie={DATA[0]} />
                        } else if (activeTab === 2) {
                            return <Episodes movie={DATA[0]} />
                        }
                    })()}
                    <BottonNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
            </div>
        </div>
    );
};

export { Main }
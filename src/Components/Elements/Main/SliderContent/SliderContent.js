import { BiTimeFive } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import styles from './SliderContent.module.scss';

const SliderContent = ({ item }) => {
  return (
    <div className={styles.content}>
      <h1 style={{ margin: '10px' }}>{item.name}</h1>
      <div className={styles.description}>
        <h4>{item.genre}</h4>
        <h4>{item.date}</h4>
        <BiTimeFive className={styles.time} />
        <h4 style={{ color: 'orange' }}>{item.duration}</h4>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h4 style={{ color: 'orange', fontSize: '20px', marginLeft: '10px' }}>
          {item.grade}
        </h4>
        <AiFillStar style={{ color: 'yellow', fontSize: '25px', marginTop: '26px', marginLeft: '5px' }} />
      </div>
    </div>
  );
};

export { SliderContent }
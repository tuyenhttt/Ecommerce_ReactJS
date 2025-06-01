import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles.module.scss';

const dataLogos = [
  {
    id: '1',
    src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
  },
  {
    id: '2',
    src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
  },
  {
    id: '3',
    src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
  },
  {
    id: '4',
    src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
  },
  {
    id: '5',
    src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
  },
  {
    id: '6',
    src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
  },
  {
    id: '7',
    src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
  },
  {
    id: '8',
    src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
  },
  {
    id: '9',
    src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
  },
  {
    id: '10',
    src: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png',
  },
];

const Logos = () => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        className={styles.swiperContainer}
      >
        {dataLogos.map(logo => (
          <SwiperSlide key={logo.id} className={styles.slide}>
            <img
              src={logo.src}
              alt={`logo-${logo.id}`}
              className={styles.logoImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Logos;

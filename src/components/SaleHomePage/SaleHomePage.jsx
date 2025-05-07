import MyButton from '@components/Button/Button';
import styles from './styles.module.scss';
import { useEffect } from 'react';
import useTranslateX from '@components/SaleHomePage/translateXImage';

function SaleHomePage() {
  const { container, boxImage, title, des, btn } = styles;

  const { translateXPosition } = useTranslateX();

  return (
    <div className={container}>
      <div
        className={boxImage}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: 'transform 0.6s ease',
        }}
      >
        <img
          src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
          alt=''
        />
      </div>
      <div>
        <h2 className={title}>Sale Of The Year</h2>
        <p className={des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <div className={btn}>
          <MyButton content={'Read more'} isPrimary={false} />
        </div>
      </div>
      <div
        className={boxImage}
        style={{
          transform: `translateX(-${translateXPosition}px)`,
          transition: 'transform 0.6s ease',
        }}
      >
        <img
          src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
          alt=''
        />
      </div>
    </div>
  );
}

export default SaleHomePage;

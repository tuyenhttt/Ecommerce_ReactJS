import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import MyButton from '@components/Button/Button';

function HomePage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        <Info />
        <AdvanceHeading />
        <HeadingListProduct />
        <div style={{ height: '200px' }}></div>
      </div>
    </div>
  );
}

export default HomePage;

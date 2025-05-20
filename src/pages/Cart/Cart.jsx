import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import Contents from '@/pages/Cart/components/Contents/Contents';
import Steps from '@/pages/Cart/components/Steps/Steps';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';

const Cart = () => {
  const { container } = styles;
  return (
    <>
      <MyHeader />
      <div className={container}>
        <Steps />
        <MainLayout>
          <Contents />
        </MainLayout>
      </div>
      <MyFooter />
    </>
  );
};
export default Cart;

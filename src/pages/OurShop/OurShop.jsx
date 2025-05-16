import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '@/pages/OurShop/components/Banner';
import { OurShopProvider } from '@contexts/OurShopProvider';
import Filter from '@/pages/OurShop/components/Filter';
import ListProduct from '@/pages/OurShop/components/ListProduct';

const OurShop = () => {
  const { container, functionBox, backLink } = styles;
  const navigate = useNavigate();

  const handleBackPreviousPage = () => {
    navigate(-1);
  };

  return (
    <OurShopProvider>
      <MyHeader />
      <MainLayout>
        <div className={container}>
          <div className={functionBox}>
            <div>
              <Link to='/'>Home</Link> <span> &gt; Shop</span>
            </div>
            <div className={backLink} onClick={() => handleBackPreviousPage()}>
              &lt; Return to previous pages
            </div>
          </div>
        </div>
        <Banner />

        <div>
          <Filter />
          <ListProduct />
        </div>
      </MainLayout>
    </OurShopProvider>
  );
};

export default OurShop;

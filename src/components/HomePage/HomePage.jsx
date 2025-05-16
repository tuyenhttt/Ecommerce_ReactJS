import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import { useEffect, useState } from 'react';
import MyFooter from '@components/Footer/Footer';

function HomePage() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => {
      setListProducts(res.contents);
    });
  }, []);

  return (
    <>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeading />
      <HeadingListProduct data={listProducts.slice(0, 2)} />
      <PopularProduct data={listProducts.slice(2, 8)} />
      <SaleHomePage />
      <MyFooter />
    </>
  );
}

export default HomePage;

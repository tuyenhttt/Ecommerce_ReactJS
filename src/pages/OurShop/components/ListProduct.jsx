import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';

const ListProduct = () => {
  const { containerProduct } = styles;
  const { products, isShowGrid } = useContext(OurShopContext);

  return (
    <>
      <MainLayout>
        <div className={isShowGrid ? containerProduct : ''}>
          {products.map(item => {
            return (
              <ProductItem
                key={item._id}
                src={item.images[0]}
                prevSrc={item.images[1]}
                name={item.name}
                price={item.price}
                details={item}
                isHomePage={false}
              />
            );
          })}
        </div>
      </MainLayout>
    </>
  );
};

export default ListProduct;

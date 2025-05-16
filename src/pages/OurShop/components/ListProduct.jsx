import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import MyButton from '@components/Button/Button';

const ListProduct = () => {
  const { containerProduct, moreBtn } = styles;
  const { products, isShowGrid, isLoading } = useContext(OurShopContext);

  return (
    <>
      <MainLayout>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
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
            <div className={moreBtn}>
              <MyButton content={'LOAD MORE PRODUCT'} />
            </div>
          </>
        )}
      </MainLayout>
    </>
  );
};

export default ListProduct;

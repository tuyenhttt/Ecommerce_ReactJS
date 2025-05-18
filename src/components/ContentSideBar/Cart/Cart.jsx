import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import { IoCartOutline } from 'react-icons/io5';
import styles from './styles.module.scss';
import MyButton from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const {
    container,
    buttonWrapper,
    total,
    isEmpty,
    boxEmpty,
    boxBtnEmpty,
    textEmpty,
    containerListItem,
  } = styles;

  const { listProductCart, isLoading, setIsOpen } = useContext(SideBarContext);
  const navigate = useNavigate();

  const handleNavigateToShop = () => {
    navigate('/shop');
    setIsOpen(false);
  };

  const subTotal = parseFloat(
    listProductCart.reduce((acc, item) => acc + item.total, 0).toFixed(2)
  );

  return (
    <div
      className={classNames(container, {
        [isEmpty]: !listProductCart.length,
      })}
    >
      <HeaderSideBar
        icon={<IoCartOutline style={{ fontSize: '30px' }} />}
        title={'CART'}
      />

      {listProductCart.length ? (
        <div className={containerListItem}>
          <div>
            {isLoading ? (
              <LoadingTextCommon />
            ) : (
              listProductCart.map((item, index) => (
                <ItemProduct
                  key={index}
                  src={item.images[0]}
                  nameProduct={item.name}
                  priceProduct={item.price}
                  skuProduct={item.sku}
                  sizeProduct={item.size}
                  quantity={item.quantity}
                  productId={item.productId}
                  userId={item.userId}
                />
              ))
            )}
          </div>

          <div>
            <div className={total}>
              <p>SUB TOTAL: </p>
              <p> $ {subTotal}</p>
            </div>
            <div className={buttonWrapper}>
              <MyButton content={'VIEW CART'} />
              <MyButton content={'CHECKOUT'} isPrimary={false} />
            </div>
          </div>
        </div>
      ) : (
        <div className={boxEmpty}>
          <div className={textEmpty}>No product in the cart</div>
          <div className={boxBtnEmpty}>
            <MyButton onClick={handleNavigateToShop} content={'GO TO SHOP'} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

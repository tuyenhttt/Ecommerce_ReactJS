import CartTable from '@/pages/Cart/components/Contents/CartTable';
import CartSummary from '@/pages/Cart/components/Contents/CartSummary';
import styles from '../../styles.module.scss';
import MyButton from '@components/Button/Button';
import { FiTrash2 } from 'react-icons/fi';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { addProductToCart } from '@/apis/cartService';
import { deleteItem, deleteCart } from '@/apis/cartService';
import { IoMdCart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Contents = () => {
  const { listProductCart, handleGetListProductsCart, setIsLoading, userId } =
    useContext(SideBarContext);

  const navigate = useNavigate();

  const {
    containerContent,
    left,
    right,
    boxFooter,
    boxCoupon,
    boxBtnDelete,
    boxEmptyCart,
    titleEmpty,
  } = styles;

  const handleReplaceQuantity = data => {
    addProductToCart(data)
      .then(res => {
        handleGetListProductsCart(data.userId, 'cart');
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const handleDeleteItemCart = data => {
    deleteItem(data)
      .then(res => {
        handleGetListProductsCart(data.userId, 'cart');
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const handleDeleteCart = () => {
    deleteCart({ userId })
      .then(res => {
        handleGetListProductsCart(userId, 'cart');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleNavigateShop = () => {
    navigate('/shop');
  };

  return (
    <>
      {listProductCart.length > 0 && userId ? (
        <div className={containerContent}>
          <div className={left}>
            <CartTable
              listProductCart={listProductCart}
              getData={handleReplaceQuantity}
              getDataDelete={handleDeleteItemCart}
            />
            <div className={boxFooter}>
              <div className={boxCoupon}>
                <input type='text' placeholder='Counpon code' />
                <MyButton content={'OK'} isPrimary={false} />
              </div>

              <div className={boxBtnDelete}>
                <MyButton
                  content={
                    <div>
                      <span>
                        <FiTrash2 />
                      </span>
                      CLEAR SHOPPING CART
                    </div>
                  }
                  isPrimary={false}
                  onClick={handleDeleteCart}
                />
              </div>
            </div>
          </div>

          <div className={right}>
            <CartSummary />
          </div>
        </div>
      ) : (
        <div className={boxEmptyCart}>
          <IoMdCart style={{ fontSize: '50px' }} />
          <div className={titleEmpty}>YOUR SHOPPING CART IS EMPTY</div>
          <div>
            We invite you to get acquainted with an assortment of our shop.
            Surely you can find something for yourself!
          </div>
          <MyButton onClick={handleNavigateShop} content={'GO TO SHOP'} />
        </div>
      )}
    </>
  );
};

export default Contents;

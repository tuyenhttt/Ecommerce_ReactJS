import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import { IoCartOutline } from 'react-icons/io5';
import styles from './styles.module.scss';
import MyButton from '@components/Button/Button';

function Cart() {
  const { container, buttonWrapper, total } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<IoCartOutline style={{ fontSize: '30px' }} />}
          title={'CART'}
        />
        <ItemProduct />
      </div>
      <div>
        <div className={total}>
          <p>SUB TOTAL: </p>
          <p> $199</p>
        </div>
        <div className={buttonWrapper}>
          <MyButton content={'VIEW  CART'} />
          <MyButton content={'CHECKOUT'} isPrimary={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;

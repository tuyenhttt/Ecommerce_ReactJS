import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import { FaRegHeart } from 'react-icons/fa';
import styles from './styles.module.scss';
import MyButton from '@components/Button/Button';

function WishList() {
  const { container, buttonWrapper } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<FaRegHeart style={{ fontSize: '20px' }} />}
          title={'WISHLIST'}
        />
        <ItemProduct />
      </div>
      <div className={buttonWrapper}>
        <MyButton content={'VIEW WISHLIST'} />
        <MyButton content={'ADD ALL TO CART'} isPrimary={false} />
      </div>
    </div>
  );
}

export default WishList;

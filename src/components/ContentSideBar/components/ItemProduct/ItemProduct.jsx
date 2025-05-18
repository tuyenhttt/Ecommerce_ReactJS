import { deleteItem } from '@/apis/cartService';
import styles from './styles.module.scss';
import { IoClose } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ItemProduct({
  src,
  nameProduct,
  priceProduct,
  skuProduct,
  sizeProduct,
  quantity,
  productId,
  userId,
}) {
  const {
    container,
    boxContent,
    title,
    price,
    boxClose,
    size,
    overLayLoading,
  } = styles;
  const [isDelete, setIsDelete] = useState(false);
  const { handleGetListProductsCart } = useContext(SideBarContext);

  const handleRemoveItem = () => {
    setIsDelete(true);
    deleteItem({
      productId,
      userId,
    })
      .then(res => {
        setIsDelete(false);
        handleGetListProductsCart(userId, 'cart');
      })
      .catch(err => {
        setIsDelete(false);
      });
  };

  return (
    <div className={container}>
      <img src={src} alt='' />
      <div className={boxClose} onClick={handleRemoveItem}>
        <IoClose style={{ fontSize: '22px' }} />
      </div>
      <div className={boxContent}>
        <div className={title}>{nameProduct}</div>
        <div className={size}>{sizeProduct}</div>
        <div className={price}>
          {quantity} X $ {priceProduct}
        </div>
        <div className={price}>{skuProduct}</div>
      </div>
      {isDelete && (
        <div className={overLayLoading}>
          <LoadingTextCommon />
        </div>
      )}
    </div>
  );
}

export default ItemProduct;

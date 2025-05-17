import styles from './styles.module.scss';
import { IoClose } from 'react-icons/io5';

function ItemProduct({
  src,
  nameProduct,
  priceProduct,
  skuProduct,
  sizeProduct,
  quantity,
}) {
  const { container, boxContent, title, price, boxClose, size } = styles;
  return (
    <div className={container}>
      <img src={src} alt='' />
      <div className={boxClose}>
        <IoClose style={{ fontSize: '22px' }} />
      </div>
      <div className={boxContent}>
        <div className={title}>{nameProduct}</div>
        <div className={size}>{sizeProduct}</div>
        <div className={price}>
          {quantity} X ${priceProduct}
        </div>
        <div className={price}>{skuProduct}</div>
      </div>
    </div>
  );
}

export default ItemProduct;

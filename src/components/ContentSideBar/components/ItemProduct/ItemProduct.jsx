import styles from './styles.module.scss';
import { IoClose } from 'react-icons/io5';

function ItemProduct() {
  const { container, boxContent, title, price, boxClose, size } = styles;
  return (
    <div className={container}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbctfw2KagagcVnuOzFjd9yiAvPHeTlmhMyw&s'
        alt=''
      />
      <div className={boxClose}>
        <IoClose style={{ fontSize: '22px' }} />
      </div>
      <div className={boxContent}>
        <div className={title}>title of product</div>
        <div className={size}>Size: M</div>
        <div className={price}>$119</div>
        <div className={price}>SKU: 111154789</div>
      </div>
    </div>
  );
}

export default ItemProduct;

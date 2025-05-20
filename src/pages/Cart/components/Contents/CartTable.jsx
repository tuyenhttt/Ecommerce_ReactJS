import styles from '../../styles.module.scss';
import { FiTrash2 } from 'react-icons/fi';
import SelectBox from '@/pages/OurShop/components/SelectBox';

const CartTable = ({ items = [] }) => {
  const { cartTable, productInfo, trashIcon, itemSize, itemName } = styles;

  const showOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
  ];

  const getValueSelect = (value, type) => {
    console.log(value, type);
  };

  return (
    <table className={cartTable}>
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>SKU</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(items) &&
          items.map((item, index) => {
            const subtotal = (item.price * item.quantity).toFixed(2);
            return (
              <tr key={index}>
                <td>
                  <div className={productInfo}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <div className={itemName}>{item.name}</div>
                      <div className={itemSize}>Size: {item.size}</div>
                    </div>
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.sku}</td>
                <td>
                  <SelectBox
                    options={showOptions}
                    getValue={getValueSelect}
                    type='show'
                  />
                </td>
                <td>${subtotal}</td>
                <td>
                  <FiTrash2 className={trashIcon} title='Remove item' />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default CartTable;

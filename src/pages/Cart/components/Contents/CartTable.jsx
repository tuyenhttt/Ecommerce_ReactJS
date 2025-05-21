import styles from '../../styles.module.scss';
import { FiTrash2 } from 'react-icons/fi';
import SelectBox from '@/pages/OurShop/components/SelectBox';

const CartTable = ({ listProductCart, getData, getDataDelete }) => {
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

  const getValueSelect = (userId, productId, quantity, size) => {
    const data = {
      userId,
      productId,
      quantity,
      size,
      isMultiple: true,
    };

    getData(data);
  };

  return (
    <>
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
          {listProductCart.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className={productInfo}>
                    <img src={item.images[0]} alt={item.name} />
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
                    getValue={e =>
                      getValueSelect(item.userId, item.productId, e, item.size)
                    }
                    type='show'
                    defaultValue={item.quantity}
                  />
                </td>
                <td>$ {(item.price * item.quantity).toFixed(2)} </td>
                <td>
                  <div
                    onClick={() =>
                      getDataDelete({
                        userId: item.userId,
                        productId: item.productId,
                      })
                    }
                  >
                    <FiTrash2 className={trashIcon} title='Remove item' />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CartTable;

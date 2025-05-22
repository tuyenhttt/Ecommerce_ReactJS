import MyButton from '@components/Button/Button';
import styles from '../../styles.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

const CartSummary = () => {
  const {
    containerSummary,
    title,
    boxTotal,
    price,
    subTotal,
    totals,
    space,
    buttonWrapper,
    containerMethod,
    titleMethod,
    boxImgMethod,
    imgMethod,
    textSecure,
  } = styles;

  const { listProductCart } = useContext(SideBarContext);

  const srcMethod = [
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
    'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg',
  ];

  const total = parseFloat(
    listProductCart.reduce((acc, item) => acc + item.total, 0).toFixed(2)
  );

  return (
    <>
      <div className={containerSummary}>
        <div className={title}>CART TOTAL</div>
        <div className={classNames(boxTotal, subTotal)}>
          <div>SUB TOTAL</div>
          <div className={price}>$ {total}</div>
        </div>
        <div className={classNames(boxTotal, totals)}>
          <div>TOTAL</div>
          <div>$ {total}</div>
        </div>
        <div className={buttonWrapper}>
          <MyButton content={'PROCESS TO CHECKOUT'} />
          <div className={space}></div>
          <MyButton content={'CONTINUE SHOPPING'} isPrimary={false} />
        </div>
      </div>
      <div className={containerMethod}>
        <div className={titleMethod}>
          Guaranteed <span>safe</span> checkout
        </div>

        <div className={boxImgMethod}>
          {srcMethod.map((src, index) => {
            return (
              <img src={src} alt={src} key={index} className={imgMethod} />
            );
          })}
        </div>
      </div>
      <div className={textSecure}>Your Payment is 100% Secure </div>
    </>
  );
};

export default CartSummary;

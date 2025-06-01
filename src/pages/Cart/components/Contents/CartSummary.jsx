import MyButton from '@components/Button/Button';
import styles from '../../styles.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import PaymentMethod from '@components/PaymentMethos/PaymentMethod';
import { StepperContext } from '@/contexts/StepperProvider';
import { useNavigate } from 'react-router-dom';

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
  } = styles;

  const { listProductCart } = useContext(SideBarContext);
  const { setCurrentStep } = useContext(StepperContext);

  const navigate = useNavigate();

  const total = parseFloat(
    listProductCart.reduce((acc, item) => acc + item.total, 0).toFixed(2)
  );

  const handleProcessCheckout = () => {
    setCurrentStep(2);
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

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
          <MyButton
            content={'PROCESS TO CHECKOUT'}
            onClick={handleProcessCheckout}
          />
          <div className={space}></div>
          <MyButton
            content={'CONTINUE SHOPPING'}
            isPrimary={false}
            onClick={handleContinueShopping}
          />
        </div>
      </div>
      <PaymentMethod />
    </>
  );
};

export default CartSummary;

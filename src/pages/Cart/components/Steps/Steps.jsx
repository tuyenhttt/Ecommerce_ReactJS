import Stepper from '@/pages/Cart/components/Steps/Stepper';
import styles from '../../styles.module.scss';
import { number } from 'yup';

const Steps = () => {
  const { containerSteps, steps, line, textNoti } = styles;

  const dataStep = [
    { number: 1, content: 'Shopping cart' },
    { number: 2, content: 'Checkout' },
    { number: 3, content: 'Order Status' },
  ];
  return (
    <div className={containerSteps}>
      <div className={steps}>
        {dataStep.map((item, index) => {
          return (
            <>
              <Stepper
                key={index}
                number={item.number}
                content={item.content}
                isDisabled={index !== 0}
              />
              {index !== dataStep.length - 1 && <div className={line} />}
            </>
          );
        })}
      </div>
      <div className={textNoti}>
        You are out of time! Checkout now to avoid losing your order!
      </div>
    </div>
  );
};

export default Steps;

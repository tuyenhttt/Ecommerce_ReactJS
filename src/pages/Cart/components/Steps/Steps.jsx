import Stepper from '@/pages/Cart/components/Steps/Stepper';
import styles from '../../styles.module.scss';
import { useContext } from 'react';
import { StepperContext } from '@/contexts/StepperProvider';

const Steps = () => {
  const { containerSteps, steps, line, textNoti } = styles;
  const { currentStep } = useContext(StepperContext);

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
                isDisabled={index >= currentStep}
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

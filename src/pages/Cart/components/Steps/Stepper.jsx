import classNames from 'classnames';
import styles from '../../styles.module.scss';
import { useContext } from 'react';
import { StepperContext } from '@/contexts/StepperProvider';

const Stepper = ({ number, content, isDisabled }) => {
  const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
    styles;

  const { setCurrentStep } = useContext(StepperContext);

  return (
    <div className={stepper} onClick={() => setCurrentStep(number)}>
      <div
        className={classNames(numberStep, {
          [isDisableNumber]: isDisabled,
        })}
      >
        {number}
      </div>
      <div
        className={classNames(textStep, {
          [isDisableText]: isDisabled,
        })}
      >
        {content}
      </div>
    </div>
  );
};

export default Stepper;

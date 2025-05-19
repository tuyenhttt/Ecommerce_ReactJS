import classNames from 'classnames';
import styles from '../../styles.module.scss';

const Stepper = ({ number, content, isDisabled }) => {
  const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
    styles;
  return (
    <div className={stepper}>
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

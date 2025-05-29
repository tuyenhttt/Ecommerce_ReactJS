import { FaRegStar } from 'react-icons/fa';
import styles from '../styles.module.scss';

const FormInput = ({ label, isRequired, typeChildren }) => {
  const { formInput, boxItemStar } = styles;

  const renderStar = length => {
    return Array.from({ length }, (_, index) => {
      return <FaRegStar key={index} style={{ color: 'gold' }} />;
    });
  };

  const renderChildren = () => {
    switch (typeChildren) {
      case 'rating':
        return (
          <div className={boxItemStar}>
            <div>{renderStar(1)}</div>
            <div>{renderStar(2)}</div>
            <div>{renderStar(3)}</div>
            <div>{renderStar(4)}</div>
            <div>{renderStar(5)}</div>
          </div>
        );
      case 'input':
        return <input type='text' />;
      case 'textarea':
        return <textarea rows={10} />;
    }
  };
  return (
    <div className={formInput}>
      <label htmlFor=''>
        {label} {isRequired && <span>*</span>}
      </label>
      {renderChildren()}
    </div>
  );
};

export default FormInput;

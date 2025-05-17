import styles from './styles.module.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingTextCommon = () => {
  const { rotate } = styles;
  return (
    <div>
      <AiOutlineLoading3Quarters className={rotate} />
    </div>
  );
};

export default LoadingTextCommon;

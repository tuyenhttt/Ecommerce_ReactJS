import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import styles from '../styles.module.scss';

const LoadingCart = () => {
  const { loadingCart } = styles;
  return (
    <div className={loadingCart}>
      <LoadingTextCommon />
    </div>
  );
};

export default LoadingCart;

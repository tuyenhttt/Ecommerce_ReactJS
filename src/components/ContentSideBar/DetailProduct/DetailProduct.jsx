import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';

const DetailProduct = () => {
  const { detailProduct } = useContext(SideBarContext);

  const { container } = styles;

  return (
    <div className={container}>
      <SliderCommon data={detailProduct.images} />
    </div>
  );
};

export default DetailProduct;

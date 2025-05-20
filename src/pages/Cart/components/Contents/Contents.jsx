import CartTable from '@/pages/Cart/components/Contents/CartTable';
import CartSummary from '@/pages/Cart/components/Contents/CartSummary';
import styles from '../../styles.module.scss';

const Contents = () => {
  const mockItems = [
    {
      image:
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg',
      name: 'Consectetur nibh at',
      price: 119.99,
      sku: '87654',
      size: 'L',
      quantity: 1,
    },
    {
      image:
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg',
      name: 'Scelerisque eleifend',
      price: 435.0,
      sku: '87654',
      size: 'L',
      quantity: 1,
    },
    {
      image:
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg',
      name: 'Nunc sed augue',
      price: 434.2,
      sku: '87654',
      size: 'L',
      quantity: 2,
    },
  ];

  const { containerContent, left, right } = styles;
  return (
    <div className={containerContent}>
      <div className={left}>
        <CartTable items={mockItems} />
      </div>
      <div className={right}>
        <CartSummary items={mockItems} />
      </div>
    </div>
  );
};

export default Contents;

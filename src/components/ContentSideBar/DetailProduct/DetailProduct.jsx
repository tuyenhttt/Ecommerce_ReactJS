import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import MyButton from '@components/Button/Button';
import { IoCart } from 'react-icons/io5';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import classNames from 'classnames';
import { addProductToCart } from '@/apis/cartService';

const DetailProduct = () => {
  const {
    detailProduct,
    userId,
    setType,
    handleGetListProductsCart,
    setIsLoading,
    setIsOpen,
  } = useContext(SideBarContext);
  const [chooseSize, setChooseSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const {
    container,
    title,
    price,
    des,
    boxSize,
    size,
    label,
    boxAddToCart,
    boxOr,
    line,
    or,
    boxOther,
    other,
    isActive,
  } = styles;

  const showOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
  ];

  const handleGetSize = value => {
    setChooseSize(value);
  };

  const handleGetQuantity = value => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    const data = {
      userId,
      productId: detailProduct._id,
      quantity,
      size: chooseSize,
      isMultiple: true,
    };

    setIsOpen(false);
    setIsLoading(true);
    addProductToCart(data)
      .then(res => {
        setIsOpen(true);
        setType('cart');
        handleGetListProductsCart(userId, 'cart');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={container}>
      <SliderCommon data={detailProduct.images} />
      <div className={title}>{detailProduct.name}</div>
      <div className={price}>$ {detailProduct.price}</div>
      <div className={des}>{detailProduct.description}</div>

      <div className={label}>Size {chooseSize}</div>
      <div className={boxSize}>
        {detailProduct.size.map((item, index) => {
          return (
            <div
              className={classNames(size, {
                [isActive]: item.name === chooseSize,
              })}
              key={index}
              onClick={() => handleGetSize(item.name)}
            >
              {item.name}
            </div>
          );
        })}
      </div>

      <div className={boxAddToCart}>
        <SelectBox
          options={showOptions}
          type='show'
          defaultValue={quantity}
          getValue={handleGetQuantity}
        />
        <div>
          <MyButton
            content={
              <div>
                <IoCart /> ADD TO CART
              </div>
            }
            onClick={handleAddToCart}
          />
        </div>
      </div>

      <div className={boxOr}>
        <div className={line} />
        <div className={or}> OR </div>
        <div className={line} />
      </div>
      <MyButton
        content={
          <div>
            <IoCart />
            SELECT OPTIONS
          </div>
        }
      />

      <div className={boxOther}>
        <TfiReload style={{ fontSize: '20px' }} />
        <div>Add to compare</div>
      </div>
      <div className={boxOther}>
        <FaRegHeart style={{ fontSize: '20px' }} />
        <div>Add to wishlist </div>
      </div>

      <div className={other}>
        SKU: <span>1234</span>
      </div>
      <div className={other}>
        Category: <span>Gucci</span>
      </div>
      <div className={other}>
        Estimated delivery: <span>3 - 5 days</span>
      </div>
      <div className={other}>
        Share:{' '}
        <span>
          <FaFacebookF />
          <FaTwitter />
        </span>
      </div>
    </div>
  );
};

export default DetailProduct;

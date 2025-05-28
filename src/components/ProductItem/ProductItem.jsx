import styles from './styles.module.scss';
import classNames from 'classnames';
import MyButton from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { toast } from 'react-toastify';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { FaRegHeart } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import { FaRegEye } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true,
}) {
  // const { isShowGrid } = useContext(OurShopContext);
  const [sizeChoose, setsizeChoose] = useState('');
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const userId = Cookies.get('userId');
  const { setIsOpen, setType, handleGetListProductsCart, setDetailProduct } =
    useContext(SideBarContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    boxImg,
    showImageHover,
    showFncHover,
    boxIcon,
    title,
    priceCl,
    boxSize,
    size,
    textCenter,
    boxBtn,
    content,
    containerItem,
    largImg,
    isActiveSize,
  } = styles;

  const handleChooseSize = size => {
    setsizeChoose(prev => (prev === size ? '' : size));
  };

  const handleAddToCart = () => {
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please login to add product to cart');
      return;
    }
    if (!sizeChoose) {
      toast.warning('Please choose size');
      return;
    }

    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: sizeChoose,
    };

    setIsLoading(true);
    addProductToCart(data)
      .then(res => {
        setIsOpen(true);
        setType('cart');
        toast.success('Add product to cart successfully');
        setIsLoading(false);
        handleGetListProductsCart(userId, 'cart');
      })
      .catch(err => {
        console.log(err);
        toast.error('Add product to cart failed');
        setIsLoading(false);
      });
  };

  const handleShowDetailProductSideBar = () => {
    setIsOpen(true);
    setType('detail');
    setDetailProduct(details);
  };

  const handleNavigateToDetail = () => {
    const path = `/product/${details._id}`;
    navigate(path);
  };

  useEffect(() => {
    isHomePage ? setIsShowGrid(true) : setIsShowGrid(ourShopStore?.isShowGrid);
  }, [isHomePage, ourShopStore?.isShowGrid]);

  return (
    <div
      className={isShowGrid ? '' : containerItem}
      style={{ cursor: 'pointer' }}
    >
      <div
        className={classNames(boxImg, {
          [largImg]: !isShowGrid,
        })}
        onClick={handleNavigateToDetail}
      >
        <img src={src} alt='' />
        <img src={prevSrc} alt='' className={showImageHover} />
        <div className={showFncHover}>
          <div className={boxIcon}>
            <LiaShoppingBagSolid style={{ fontSize: '20px' }} />
          </div>

          <div className={boxIcon}>
            <FaRegHeart style={{ fontSize: '20px' }} />
          </div>
          <div className={boxIcon}>
            <TfiReload style={{ fontSize: '20px' }} />
          </div>
          <div className={boxIcon} onClick={handleShowDetailProductSideBar}>
            <FaRegEye style={{ fontSize: '20px' }} />
          </div>
        </div>
      </div>
      <div className={isShowGrid ? '' : content}>
        {!isHomePage && (
          <div className={boxSize}>
            {details.size.map((item, index) => {
              return (
                <div
                  className={classNames(size, {
                    [isActiveSize]: sizeChoose === item.name,
                  })}
                  key={index}
                  onClick={() => handleChooseSize(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
        <div
          className={classNames(title, {
            [textCenter]: !isHomePage,
          })}
        >
          {name}
        </div>
        {!isHomePage && (
          <div className={textCenter} style={{ color: '#888' }}>
            Bran01
          </div>
        )}
        <div
          className={classNames(priceCl, {
            [textCenter]: !isHomePage,
          })}
          style={{ color: isHomePage ? '#333' : '#888' }}
        >
          $ {price}
        </div>
        {!isHomePage && (
          <div className={boxBtn}>
            <MyButton
              content={isLoading ? <LoadingTextCommon /> : 'ADD TO CART'}
              onClick={handleAddToCart}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;

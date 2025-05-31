import styles from './styles.module.scss';
import classNames from 'classnames';
import MyButton from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { FaRegHeart } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import { FaRegEye } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { handleAddProductToCart } from '@utils/helper';

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true,
  slideItem = false,
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
    leftBtn,
  } = styles;

  const handleChooseSize = size => {
    setsizeChoose(prev => (prev === size ? '' : size));
  };

  const handleAddToCart = () => {
    handleAddProductToCart(
      userId,
      setIsOpen,
      setType,
      sizeChoose,
      details._id,
      1,
      setIsLoading,
      handleGetListProductsCart
    );
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

  useEffect(() => {
    if (slideItem) setIsShowGrid(true);
  }, [slideItem]);

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
          <div
            className={classNames(boxBtn, {
              [leftBtn]: !isShowGrid,
            })}
          >
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

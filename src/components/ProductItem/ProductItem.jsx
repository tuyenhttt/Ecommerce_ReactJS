import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';
import classNames from 'classnames';
import MyButton from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';

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

  useEffect(() => {
    isHomePage ? setIsShowGrid(true) : setIsShowGrid(ourShopStore?.isShowGrid);
  }, [isHomePage, ourShopStore?.isShowGrid]);

  return (
    <div className={isShowGrid ? '' : containerItem}>
      <div
        className={classNames(boxImg, {
          [largImg]: !isShowGrid,
        })}
      >
        <img src={src} alt='' />
        <img src={prevSrc} alt='' className={showImageHover} />
        <div className={showFncHover}>
          <div>
            <div className={boxIcon}>
              <img src={cartIcon} alt='' />
            </div>

            <div className={boxIcon}>
              <img src={heartIcon} alt='' />
            </div>
            <div className={boxIcon}>
              <img src={reloadIcon} alt='' />
            </div>
            <div className={boxIcon}>
              <img src={eyeIcon} alt='' />
            </div>
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
          ${price}
        </div>
        {!isHomePage && (
          <div className={boxBtn}>
            <MyButton content={'Add to cart'} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;

import useScrollHandling from '@/hooks/useScrollHandling';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constant';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import { StoreContext } from '@/contexts/storeProvider';

function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    container,
    fixedHeader,
    topHeader,
    headerCenter,
    headerSection,
    boxCart,
    quantity,
  } = styles;

  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);

  const {
    setIsOpen,
    setType,
    listProductCart,
    userId,
    handleGetListProductsCart,
  } = useContext(SideBarContext);

  const { userInfo } = useContext(StoreContext);

  const handleOpenSideBar = type => {
    setIsOpen(true);
    setType(type);
  };

  const handleOpenCartSideBar = () => {
    handleGetListProductsCart(userId, 'cart');
    handleOpenSideBar('cart');
  };

  const totalItemCart = listProductCart.length
    ? listProductCart.reduce((acc, item) => {
        return (acc += item.quantity);
      }, 0)
    : 0;

  useEffect(() => {
    // setFixedPosition(scrollPosition > 80 ? true : false);
    setFixedPosition(scrollPosition > 80);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
      <div className={containerHeader}>
        <div className={styles.headerSection}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.slice(0, 3).map((item, index) => (
              <BoxIcon key={index} type={item.type} href={item.href} />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, index) => (
              <Menu key={index} content={item.content} href={item.href} />
            ))}
          </div>
        </div>

        <div className={headerCenter}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/MINI_logo.svg/500px-MINI_logo.svg.png'
            alt='logo'
            className={styles.logo}
          />
        </div>

        <div className={headerSection}>
          <div className={containerMenu}>
            {dataMenu.slice(3).map((item, index) => (
              <Menu key={index} content={item.content} href={item.href} />
            ))}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload
              style={{ fontSize: '25px' }}
              onClick={() => handleOpenSideBar('compare')}
            />
            <FaRegHeart
              style={{ fontSize: '25px' }}
              onClick={() => handleOpenSideBar('wishlist')}
            />
            <div className={boxCart}>
              <LuShoppingCart
                style={{ fontSize: '25px' }}
                onClick={() => handleOpenCartSideBar()}
              />
              <div className={quantity}>
                {totalItemCart || userInfo?.amountCart || 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;

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
  } = styles;

  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);

  const { setIsOpen, setType } = useContext(SideBarContext);

  const handleOpenSideBar = type => {
    setIsOpen(true);
    setType(type);
  };

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
        {/* Cột trái */}
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

        {/* Logo chính giữa */}
        <div className={headerCenter}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/MINI_logo.svg/500px-MINI_logo.svg.png'
            alt='logo'
            className={styles.logo}
          />
        </div>

        {/* Cột phải */}
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
            <LuShoppingCart
              style={{ fontSize: '25px' }}
              onClick={() => handleOpenSideBar('card')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;

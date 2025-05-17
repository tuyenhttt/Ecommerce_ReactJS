import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';
import { useNavigate } from 'react-router-dom';

function Menu({ content, href }) {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType, clearCart } = useContext(SideBarContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const { userInfo, handleLogOut } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleClickShowLogin = () => {
    if (content === 'Sign in' && !userInfo) {
      setIsOpen(true);
      setType('login');
    }

    if (content === 'Our Shop') {
      navigate('/shop');
    }
  };

  const handleRenderText = content => {
    if (content === 'Sign in' && userInfo) {
      return `Welcome: ${userInfo?.username}`;
    } else {
      return content;
    }
  };

  const handleHover = () => {
    if (content === 'Sign in' && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  const handleLogout = () => {
    handleLogOut();
    clearCart();
    setIsShowSubMenu(false);
  };

  return (
    <div
      className={menu}
      onMouseEnter={handleHover}
      onClick={handleClickShowLogin}
    >
      {handleRenderText(content)}
      {isShowSubMenu && (
        <div
          onMouseLeave={() => setIsShowSubMenu(false)}
          onClick={handleLogout}
          className={subMenu}
        >
          LOG OUT
        </div>
      )}
    </div>
  );
}

export default Menu;

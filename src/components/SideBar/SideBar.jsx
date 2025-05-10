import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { IoClose } from 'react-icons/io5';
import Login from '@components/ContentSideBar/LogIn/Login';

function SideBar() {
  const { container, overlay, sideBar, slideSideBar, boxIocn } = styles;
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIocn}>
            <IoClose onClick={handleToggle} />
          </div>
        )}
        <Login />
      </div>
    </div>
  );
}

export default SideBar;

import { useState } from 'react';
import classNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import styles from './styles.module.scss';

const AccordionMenu = ({ titleMenu, contentJsx, onClick, isSelected }) => {
  const {
    container,
    title,
    activeTitle,
    contentMenu,
    isVisibility,
    borderBottom,
  } = styles;

  const handleToggle = () => {
    onClick();
  };

  return (
    <div className={container}>
      <div
        className={classNames(title, {
          [activeTitle]: isSelected,
        })}
        onClick={handleToggle}
      >
        {isSelected ? (
          <TfiLayoutLineSolid
            style={{ fontSize: '20px', marginRight: '5px' }}
          />
        ) : (
          <IoIosArrowDown style={{ fontSize: '20px', marginRight: '5px' }} />
        )}
        {titleMenu}
      </div>
      <div
        className={classNames(contentMenu, borderBottom, {
          [isVisibility]: isSelected,
        })}
      >
        <div>{contentJsx}</div>
      </div>
    </div>
  );
};

export default AccordionMenu;

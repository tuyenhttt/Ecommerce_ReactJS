import styles from '../styles.module.scss';
import fbicon from '@icons/svgs/fbicon.svg';
import istaicon from '@icons/svgs/istaicon.svg';
import teleicon from '@icons/svgs/teleicon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;

  const handleRenderIcon = type => {
    switch (type) {
      case 'fb':
        return fbicon;
      case 'ins':
        return istaicon;
      case 'tele':
        return teleicon;
      case 'reload':
        return reloadIcon;
      case 'heart':
        return heartIcon;
      case 'cart':
        return cartIcon;
    }
  };
  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;

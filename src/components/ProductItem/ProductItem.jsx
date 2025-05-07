import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';

function ProductItem({ src, prevSrc, name, price }) {
  const { boxImg, showImageHover, showFncHover, boxIcon, title, priceCl } =
    styles;
  return (
    <div>
      <div className={boxImg}>
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
      <div className={title}>{name}</div>
      <div className={priceCl}>{price}</div>
    </div>
  );
}

export default ProductItem;

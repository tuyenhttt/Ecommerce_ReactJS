import MyButton from '@components/Button/Button';
import styles from './styles.module.scss';

function Banner() {
  const { container, content, title, description } = styles;
  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>MINI STORE</h1>
        <div className={description}>
          Make yours celebrations even more special this years with beautiful
        </div>
        <MyButton content={'Go to Shop'} />
      </div>
    </div>
  );
}

export default Banner;

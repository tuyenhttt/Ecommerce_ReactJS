import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import MyButton from '@components/Button/Button';

function CountdownBanner() {
  const targetDate = '2025-12-31T00:00:00';
  const { container, containerTimer, title, boxBtn } = styles;
  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>

      <h3 className={title}>The classics make a comeback</h3>
      <div className={boxBtn}>
        <MyButton content={'Buy now'} />
      </div>
    </div>
  );
}

export default CountdownBanner;

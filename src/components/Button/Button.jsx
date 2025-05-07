import styles from './styles.module.scss';
import classNames from 'classnames';

function MyButton({ content, isPrimary = true }) {
  const { btn, primaryBtn, secondaryBtn } = styles;
  return (
    <div
      className={classNames(btn, {
        [primaryBtn]: isPrimary,
        [secondaryBtn]: !isPrimary,
      })}
    >
      {content}
    </div>
  );
}

export default MyButton;

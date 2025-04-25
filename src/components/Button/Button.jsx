import styles from './styles.module.scss';

function MyButton({ content }) {
  const { btn } = styles;
  return <div className={btn}>{content}</div>;
}

export default MyButton;

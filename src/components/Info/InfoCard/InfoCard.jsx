import styles from '../styles.module.scss';

function InfoCard({ content, description, src }) {
  const { containerCard, containerContent, title, des } = styles;

  return (
    <div className={containerCard}>
      <img src={src} width={40} height={40} />
      <div className={containerContent}>
        <div className={title}>{content}</div>
        <div className={des}>{description}</div>
      </div>
    </div>
  );
}

export default InfoCard;

import styles from './styles.module.scss';

const Contact = () => {
  const { container, contact } = styles;
  return (
    <div className={container}>
      <div className={contact}>
        <div>Liên hệ với chúng tôi qua emai: email@gmail.com</div>
        <span>hoặc</span>
        <div>Qua số điện thoại 9395.647.785</div>
      </div>
    </div>
  );
};

export default Contact;

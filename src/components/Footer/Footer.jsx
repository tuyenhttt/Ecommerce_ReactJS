import { dataMenu } from '@components/Footer/constant';
import styles from './styles.module.scss';
function MyFooter() {
  const { container, boxNav } = styles;
  return (
    <div className={container}>
      <div>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/MINI_logo.svg/500px-MINI_logo.svg.png'
          alt=''
          width={160}
          height={55}
        />
      </div>
      <div className={boxNav}>
        {dataMenu.map((item, index) => (
          <div key={index}>{item.content}</div>
        ))}
      </div>
      <div>
        <p
          style={{
            textAlign: 'center',
          }}
        >
          Guaranteed safe checkout
        </p>
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
          alt=''
        />
      </div>
      <div>
        <p
          style={{
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          Copyright © 2024 ThanhTuyen theme. Created by TuyenHTT
        </p>
      </div>
    </div>
  );
}

export default MyFooter;

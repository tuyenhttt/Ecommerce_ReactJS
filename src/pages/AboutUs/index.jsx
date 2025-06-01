import MainLayout from '@components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import Logos from '@/pages/AboutUs/components/Logos';
import styles from './styles.module.scss';

const AboutUs = () => {
  const {
    container,
    functionBox,
    backLink,
    containerTitle,
    line,
    title,
    textS,
    textL,
    containerContent,
    des,
  } = styles;

  const dataContent = [
    {
      id: '1',
      url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-min.jpg',
      des: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.',
    },
    {
      id: '2',
      url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-min.jpg',
      des: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.',
    },
    {
      id: '3',
      url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-2-min.jpg',
      des: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.',
    },
  ];

  const navigate = useNavigate();

  const handleBackPreviousPage = () => {
    navigate(-1);
  };
  return (
    <>
      <MainLayout>
        <div className={container}>
          <div className={functionBox}>
            <div>
              <Link to='/'>Home</Link> <span> &gt; Shop</span>
            </div>
            <div className={backLink} onClick={() => handleBackPreviousPage()}>
              &lt; Return to previous pages
            </div>
          </div>

          <div className={containerTitle}>
            <div className={line}>
              <div className={title}>
                <div className={textS}>we try our best for you</div>
                <div className={textL}>Welcome to the Marseille04 Shop</div>
              </div>
            </div>
          </div>

          <div className={containerContent}>
            {dataContent.map(item => (
              <div key={item.id}>
                <img src={item.url} alt={item.id} />
                <div className={des}> {item.des}</div>
              </div>
            ))}
          </div>

          <Logos />
        </div>
      </MainLayout>
    </>
  );
};

export default AboutUs;

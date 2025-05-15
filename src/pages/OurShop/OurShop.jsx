import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '@/pages/OurShop/components/Banner';

const OurShop = () => {
  const { container, functionBox, backLink } = styles;
  const navigate = useNavigate();

  const handleBackPreviousPage = () => {
    navigate(-1);
  };
  return (
    <>
      <MyHeader />
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
        </div>
        <Banner />
      </MainLayout>
    </>
  );
};

export default OurShop;

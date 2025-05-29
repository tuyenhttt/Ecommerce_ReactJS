import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import MyButton from '@components/Button/Button';
import PaymentMethod from '@components/PaymentMethos/PaymentMethod';
import AccordionMenu from '@components/AccordionMenu';
import Information from '@/pages/DetailProduct/components/Information';
import ReviewProduct from '@/pages/DetailProduct/components/Review';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import ReactImageMagnifier from 'simple-image-magnifier/react';

const DetailProduct = () => {
  const {
    container,
    navigateSection,
    functionBox,
    backLink,
    imageBox,
    contentSection,
    infoBox,
    price,
    description,
    boxSize,
    size,
    functionInfo,
    boxBtn,
    increaseAmount,
    orSection,
    addFunc,
    info,
  } = styles;

  const navigate = useNavigate();

  const handleBackPreviousPage = () => {
    navigate(-1);
  };

  const [menuSelected, setMenuSelected] = useState(1);

  const dataAccordionMenu = [
    {
      id: 1,
      titleMenu: 'ADDITTIONAL INFORMATION',
      content: <Information />,
    },
    {
      id: 2,
      titleMenu: 'REVIEW (0)',
      content: <ReviewProduct />,
    },
  ];

  const dataImageDetail = [
    'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.1-min.jpg',
    'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.1-min.jpg',
    'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.1-min.jpg',
    'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.1-min.jpg',
  ];

  const handleRenderZoomImage = src => {
    return (
      <ReactImageMagnifier
        srcPreview={src}
        srcOriginal={src}
        width={295}
        height={350}
      />
    );
  };

  const handleSetMenuSelected = id => {
    setMenuSelected(id);
  };

  const tempDataSlider = [
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.1-min.jpg',
      name: ' Tesst 1',
      price: '1000',
      size: [{ name: 'L' }, { name: 'M' }, { name: 'S' }],
    },
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.1-min.jpg',
      name: ' Tesst 1',
      price: '1000',
      size: [{ name: 'L' }, { name: 'M' }, { name: 'S' }],
    },
    {
      image:
        'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.1-min.jpg',
      name: ' Tesst 1',
      price: '1000',
      size: [{ name: 'L' }, { name: 'M' }, { name: 'S' }],
    },
  ];

  return (
    <div>
      <MyHeader />

      <div className={container}>
        <MainLayout>
          <div className={navigateSection}>
            <div className={functionBox}>
              <Link to='/'>Home</Link> <span> &gt; Shop</span>
            </div>
            <div className={backLink} onClick={() => handleBackPreviousPage()}>
              &lt; Return to previous pages
            </div>
          </div>

          <div className={contentSection}>
            <div className={imageBox}>
              {dataImageDetail.map(src => handleRenderZoomImage(src))}
            </div>
            <div className={infoBox}>
              <h1>Title Product</h1>
              <p className={price}>$ 1.5534</p>
              <p className={description}>
                Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque
                arcu purus orci leo.
              </p>
              <p className={description}>Size</p>
              <div className={boxSize}>
                <div className={size}>L</div>
                <div className={size}>M</div>
                <div className={size}>S</div>
              </div>
              <div className={functionInfo}>
                <div className={increaseAmount}>
                  <div>-</div>
                  <div>1</div>
                  <div>+</div>
                </div>
                <div className={boxBtn}>
                  <MyButton content={'ADD TO CART'} />
                </div>
              </div>

              <div className={orSection}>
                <div></div>
                <span>OR</span>
                <div></div>
              </div>

              <div>
                <MyButton content={'BUY NOW'} />
              </div>

              <div className={addFunc}>
                <div>
                  <FaRegHeart />
                </div>
                <div>
                  <TfiReload />
                </div>
              </div>

              <div>
                <PaymentMethod />
              </div>

              <div className={info}>
                <div>
                  Brand: <span>Brand 03</span>
                </div>
                <div>
                  SKU:<span> 87654</span>
                </div>
                <div>
                  Category: <span>Men</span>
                </div>
              </div>
              {dataAccordionMenu.map((item, index) => (
                <AccordionMenu
                  key={index}
                  titleMenu={item.titleMenu}
                  contentJsx={item.content}
                  onClick={() => handleSetMenuSelected(item.id)}
                  isSelected={menuSelected === item.id}
                />
              ))}
            </div>
          </div>

          {/* <div>
            <h2>Related Product</h2>

            <div>
              <SliderCommon data={tempDataSlider} isProductItem showItem={4} />
            </div>
          </div> */}
        </MainLayout>
      </div>

      <MyFooter />
    </div>
  );
};

export default DetailProduct;

import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import MyButton from '@components/Button/Button';
import PaymentMethod from '@components/PaymentMethos/PaymentMethod';
import AccordionMenu from '@components/AccordionMenu';
import Information from '@/pages/DetailProduct/components/Information';
import ReviewProduct from '@/pages/DetailProduct/components/Review';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ReactImageMagnifier from 'simple-image-magnifier/react';
import classNames from 'classnames';
import { getDetailProduct, getRelatedProduct } from '@/apis/productsService';
import SliderCommon from '@components/SliderCommon/SliderCommon';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { toast } from 'react-toastify';

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
    active,
    activeDisableBtn,
    loading,
    related,
    emptyData,
    buynowBtn,
  } = styles;

  const navigate = useNavigate();

  const handleBackPreviousPage = () => {
    navigate(-1);
  };

  const [menuSelected, setMenuSelected] = useState(1);
  const [sizeSelected, setSizeSelected] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [relatedData, setRelatedData] = useState([]);

  const param = useParams();

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

  const handleSelectedSize = size => {
    if (sizeSelected === size) {
      setSizeSelected('');
    } else {
      setSizeSelected(size);
    }
  };

  const handleSetQuantity = type => {
    if (quantity < 1) return;
    setQuantity(prev =>
      type === 'increament' ? (prev += 1) : quantity === 1 ? 1 : (prev -= 1)
    );
  };

  const fetchDataDetail = async id => {
    setIsLoading(true);
    try {
      const data = await getDetailProduct(id);

      setData(data);
      setIsLoading(false);
    } catch (error) {
      toast.error('Have error when loading data');
      console.log(error);
      setData();
      setIsLoading(false);
    }
  };

  const fetchDataRelatedProduct = async id => {
    setIsLoading(true);
    try {
      const data = await getRelatedProduct(id);
      setRelatedData(data);

      setIsLoading(false);
    } catch (error) {
      toast.error('Have error when loading data');
      console.log(error);
      setRelatedData([]);
      setIsLoading(false);
    }
  };

  const handleNavigateToShop = () => {
    navigate('/shop');
  };

  useEffect(() => {
    if (param.id) {
      fetchDataDetail(param.id);
      fetchDataRelatedProduct(param.id);
    }
  }, [param]);

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

          {isLoading ? (
            <div className={loading}>
              <LoadingTextCommon />
            </div>
          ) : (
            <>
              {!data ? (
                <div className={emptyData}>
                  <p>No products</p>
                  <div>
                    <MyButton
                      onClick={handleNavigateToShop}
                      content={'BACK TO SHOP'}
                    />
                  </div>
                </div>
              ) : (
                <div className={contentSection}>
                  <div className={imageBox}>
                    {data?.images.map(src => handleRenderZoomImage(src))}
                  </div>
                  <div className={infoBox}>
                    <h1>{data?.name}</h1>
                    <p className={price}>$ {data?.price}</p>
                    <p className={description}>{data?.description}</p>
                    <p className={description}>Size {sizeSelected} </p>
                    <div className={boxSize}>
                      {data?.size.map((itemSize, index) => {
                        return (
                          <div
                            key={index}
                            className={classNames(size, {
                              [active]: sizeSelected === itemSize.name,
                            })}
                            onClick={() => handleSelectedSize(itemSize.name)}
                          >
                            {itemSize.name}
                          </div>
                        );
                      })}
                    </div>
                    <div className={functionInfo}>
                      <div className={increaseAmount}>
                        <div onClick={() => handleSetQuantity('decrement')}>
                          -
                        </div>
                        <div>{quantity}</div>
                        <div onClick={() => handleSetQuantity('increament')}>
                          +
                        </div>
                      </div>
                      <div className={boxBtn}>
                        <MyButton
                          content={'ADD TO CART'}
                          customClassname={!sizeSelected && activeDisableBtn}
                        />
                      </div>
                    </div>

                    <div className={orSection}>
                      <div></div>
                      <span>OR</span>
                      <div></div>
                    </div>

                    <div className={buynowBtn}>
                      <MyButton
                        content={'BUY NOW'}
                        customClassname={!sizeSelected && activeDisableBtn}
                      />
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
              )}
            </>
          )}

          {relatedData.length ? (
            <div>
              <h2 className={related}>Related Product</h2>

              <div>
                <SliderCommon data={relatedData} isProductItem showItem={3} />
              </div>
            </div>
          ) : (
            <></>
          )}
        </MainLayout>
      </div>

      <MyFooter />
    </div>
  );
};

export default DetailProduct;

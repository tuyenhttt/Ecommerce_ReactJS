import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import './styles.css';
import ProductItem from '@components/ProductItem/ProductItem';

const SliderCommon = ({ data, isProductItem = false, showItem = 1 }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showItem,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

  return (
    <Slider {...settings}>
      {Array.isArray(data) &&
        data.map((item, index) => {
          const src = !item.image ? item.images?.[0] : item.image;

          return (
            <div key={index}>
              {isProductItem ? (
                <ProductItem
                  src={src}
                  prevSrc={src}
                  name={item.name}
                  price={item.price}
                  details={item}
                  isHomePage={false}
                  slideItem
                />
              ) : (
                <img src={item} alt='test' />
              )}
            </div>
          );
        })}
    </Slider>
  );
};

export default SliderCommon;

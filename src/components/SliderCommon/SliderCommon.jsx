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
      {data.map((item, index) => {
        return (
          <>
            {isProductItem ? (
              <ProductItem
                src={item.image}
                prevSrc={item.image}
                name={item.name}
                price={item.price}
                details={item}
                isHomePage={false}
                slideItem
              />
            ) : (
              <img src={item} key={index} alt='test' />
            )}
          </>
        );
      })}
    </Slider>
  );
};

export default SliderCommon;

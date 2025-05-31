import { addProductToCart } from '@/apis/cartService';
import { toast } from 'react-toastify';

export const handleAddProductToCart = (
  userId,
  setIsOpen,
  setType,
  sizeChoose,
  productId,
  quantity,
  setIsLoading,
  handleGetListProductsCart
) => {
  if (!userId) {
    setIsOpen(true);
    setType('login');
    toast.warning('Please login to add product to cart');
    return;
  }
  if (!sizeChoose) {
    toast.warning('Please choose size');
    return;
  }

  const data = {
    userId,
    productId,
    quantity,
    size: sizeChoose,
  };

  setIsLoading(true);
  addProductToCart(data)
    .then(res => {
      setIsOpen(true);
      setType('cart');
      toast.success('Add product to cart successfully');
      setIsLoading(false);
      handleGetListProductsCart(userId, 'cart');
    })
    .catch(err => {
      console.log(err);
      toast.error('Add product to cart failed');
      setIsLoading(false);
    });
};

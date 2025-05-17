import { createContext, useEffect, useState } from 'react';
import { getCart } from '@/apis/cartService';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('');
  const [listProductCart, setListProductCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(listProductCart));
  }, [listProductCart]);

  const handleGetListProductsCart = (userId, type) => {
    if (userId && type === 'cart') {
      getCart(userId)
        .then(res => {
          setListProductCart(res.data.data);
        })
        .catch(err => {
          setListProductCart([]);
        });
    }
  };

  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    handleGetListProductsCart,
    listProductCart,
  };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};

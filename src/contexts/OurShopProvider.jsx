import { createContext, useState } from 'react';

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
  const sortOptions = [
    { label: 'Default sorting', value: '0' },
    { label: 'Sort by popular', value: '1' },
    { label: 'Sort by average rating', value: '2' },
    { label: 'Sort by lastest', value: '3' },
    { label: 'Sort by price: low to high', value: '4' },
    { label: 'Sort by price: high to low', value: '5' },
  ];

  const showOptions = [
    { label: '8', value: '8' },
    { label: '12', value: '12' },
    { label: 'All', value: 'all' },
  ];

  const [sortId, setSortId] = useState('0');
  const [showId, setShowId] = useState('8');
  const [isShowGrid, setIsShowGrid] = useState(true);

  const values = {
    sortOptions,
    showOptions,
    setSortId,
    setShowId,
    setIsShowGrid,
  };

  console.log(sortId);
  console.log(showId);
  console.log(isShowGrid);

  return (
    <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
  );
};

import axiosClient from './axiosClient';

// const getProducts = async query => {
//   const { sortType, page, limit } = query;

//   const queryLimit = limit === 'all' ? '' : `&limit=${limit}`;

//   const res = await axiosClient.get(
//     `/product?sortType=${sortType}&page=${page}${queryLimit}`
//   );
//   return res.data;
// };

// export { getProducts };

const getProducts = async (query = {}) => {
  const { sortType, page, limit } = query;
  let queryString = '';

  if (sortType) queryString += `sortType=${sortType}`;
  if (page) queryString += `${queryString ? '&' : ''}page=${page}`;
  if (limit && limit !== 'all')
    queryString += `${queryString ? '&' : ''}limit=${limit}`;

  const res = await axiosClient.get(
    `/product${queryString ? '?' + queryString : ''}`
  );
  return res.data;
};

export { getProducts };

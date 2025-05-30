import axiosClient from './axiosClient';

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

const getDetailProduct = async id => {
  const res = await axiosClient.get(`/product/${id}`);
  return res.data;
};

const getRelatedProduct = async id => {
  const res = await axiosClient.get(`/related-products/${id}`);
  return res.data.relatedProducts;
};

export { getProducts, getDetailProduct, getRelatedProduct };

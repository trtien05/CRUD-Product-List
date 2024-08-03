import { get, patch, post, del } from "../utils/request";

export const getListProduct = async () => {
  //**Cách để lấy ra data từ api (mặc định là GET), đổi lại thành POST, thêm application/json vào body */
  // đợi data trả về từ api
  const respone = await get('products');
  return respone;
}

export const createProduct = async (options) => {
  const respone = await post('products', options)
  return respone;
}

export const updateProuct = async (id, options) => {
  const respone = await patch(`products/${id}`, options);
  return respone;
}

export const deleteProduct = async (id) => {
  const respone = await del(`products/${id}`);
  return respone;
}
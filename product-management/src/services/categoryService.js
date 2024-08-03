import { get } from '../utils/request';

export const getListCategory = async () => {
  const respone = await get('category');
  return respone;
}
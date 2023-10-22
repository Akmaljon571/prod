import { api } from '../context';

export const src = (token, link) => {
  const src = token ? '/customer/file/' : '/public/file/';
  return api + src + link;
};

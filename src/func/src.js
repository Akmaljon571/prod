import { api } from '../context';

export const src = (token, link) => {
  const src = token ? '/admin/file/' : '/public/file/';
  return api + src + link;
};

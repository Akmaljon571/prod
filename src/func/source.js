import { api } from '../context';

export const source = (token, link) => {
  if (link) {
    const src = token ? '/customer/file/' : '/public/file/';
    return api + src + link;
  } else {
    return '';
  }
};

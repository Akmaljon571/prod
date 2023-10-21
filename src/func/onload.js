import { api } from '../context';

export const onLoad = async (e, link, token) => {
  const url = token ? `/customer/file/${link}` : `/public/file/${link}`;
  const res = await fetch(api + url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const blob = await res.blob();
  e.target.src = URL.createObjectURL(blob);
};

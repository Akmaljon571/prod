import { createContext, useState } from 'react';

export const State = createContext();
export const api = 'https://api.lincor.uz';
export const tg = 'https://t.me/akmaljondev';

export const StatePriveder = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('access_token')) || '',
  );
  const data = { token, setToken };
  return <State.Provider value={data}>{children}</State.Provider>;
};

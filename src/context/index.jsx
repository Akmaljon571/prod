import { createContext, useState } from 'react';

export const State = createContext();
export const api = 'http://157.230.176.191:4000/api';

export const StatePriveder = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('access_token')) || '',
  );
  const data = { token, setToken };
  return <State.Provider value={data}>{children}</State.Provider>;
};

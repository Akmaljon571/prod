import { createContext, useState } from 'react';

export const State = createContext();
export const api = 'https://api.lincor.uz';

export const StatePriveder = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('access_token')) || '',
  );
  const [l, setLang] = useState('uz');
  const [active, setActive] = useState(
    JSON.parse(localStorage.getItem('notificationActive')) || false,
  );
  const [openTest, setOpenTest] = useState(
    JSON.parse(localStorage.getItem('test')) ? true : false,
  );

  const data = {
    token,
    setToken,
    l,
    setLang,
    active,
    setActive,
    openTest,
    setOpenTest,
  };
  return <State.Provider value={data}>{children}</State.Provider>;
};

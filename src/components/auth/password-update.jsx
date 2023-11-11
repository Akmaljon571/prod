import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import { message } from 'antd';
import { State, api } from '../../context';
import { authLang } from './auth.lang';
import logo from '../../img/LinCor.svg';
import './auth.scss';

function PasswordUpdate() {
  const json = JSON.parse(localStorage.getItem('password-phone-code'));
  const passRef = useRef();
  const passRef1 = useRef();
  const { token, l } = useContext(State);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!json?.code || !json?.phone || !token) {
      navigate('/password');
    }
  }, [json, navigate, token]);

  const click = () => {
    const password = passRef.current.value;
    const pass1 = passRef1.current.value;
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });
    if (password?.length === 8 && password === pass1) {
      fetch(api + '/me/password', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password,
        }),
      })
        .then((re) => re.json())
        .then((data) => {
          if (data?.ok) {
            messageApi.destroy();
            messageApi.open({
              type: 'success',
              content: "Muaffaqiyatli o'zgardi",
            });
            localStorage.removeItem('password-phone-code');
            navigate('/');
          } else {
            messageApi.destroy();
            messageApi.open({
              type: 'error',
              content: "Ma'lumot xato",
              duration: 0,
            });
          }
        });
    } else {
      messageApi.destroy();
      messageApi.open({
        type: 'error',
        content: "Ma'lumotlarni to'ldiring",
      });
    }
  };

  return (
    <div className="auth passwordUpdate">
      {contextHolder}
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>{authLang[l].tikla}</h2>
      <p>{authLang[l].t1}</p>
      <label>
        <span>{authLang[l].t2}</span>
        <input ref={passRef} maxLength={8} type="password" />
      </label>
      <label>
        <span>{authLang[l].t3}</span>
        <input ref={passRef1} maxLength={8} type="password" />
      </label>
      <Button onClick={click} className="kirish" variant="contained">
        {authLang[l].ok}
      </Button>
    </div>
  );
}

export default PasswordUpdate;

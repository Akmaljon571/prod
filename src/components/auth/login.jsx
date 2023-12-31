import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import { message } from 'antd';
import { State, api } from '../../context';
import { authLang } from './auth.lang';
import logo from '../../img/LinCor.svg';
import './auth.scss';

function Login() {
  const number = useRef();
  const pass = useRef();
  const [messageApi, contextHolder] = message.useMessage();
  const { setToken, token, l } = useContext(State);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const phone = (e) => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    if (number.includes(Number(e.key))) {
      const length = e.target.value?.length;
      if (length === 2) {
        const value = e.target.value.split('(')[1];
        e.target.value =
          value === undefined ? `(${e.target.value}) ` : e.target.value;
      } else if (length === 3) {
        const value = e.target.value.split('(')[1];
        e.target.value = Number(value) ? `${e.target.value}) ` : e.target.value;
      } else if (length === 4 || length === 8 || length === 11) {
        e.target.value = `${e.target.value} `;
      } else if (length > 13) {
        e.preventDefault();
      }
    } else if (e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  const click = () => {
    const tell = number.current?.value;
    const password = pass.current?.value;
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });

    if (tell?.length === 14 && password?.length === 8) {
      const phone = tell.split(' ').join('');
      const phone_number =
        '998' + phone.split('(').join('').split(')').join('');

      fetch(api + '/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number,
          password,
        }),
      })
        .then((re) => re.json())
        .then((data) => {
          if (data?.ok) {
            messageApi.destroy();
            messageApi.open({
              type: 'success',
              content: 'Muaffaqiyatli tekshiruv',
            });
            localStorage.setItem(
              'access_token',
              JSON.stringify(data?.access_token),
            );
            setToken(data?.access_token);
            navigate('/');
          } else {
            messageApi.destroy();
            messageApi.open({
              type: 'error',
              content: "Ma'lumot xato",
              duration: 0,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          messageApi.destroy();
          messageApi.open({
            type: 'error',
            content: "Ma'lumotlarni to'ldiring",
          });
        });
    } else if (
      Number(tell.split(' ').join('').split('+').join('')) &&
      password.length === 8
    ) {
      const phone_number = tell.split(' ').join('').split('+').join('');
      if (phone_number.length === 12) {
        fetch(api + '/auth/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone_number,
            password,
          }),
        })
          .then((re) => re.json())
          .then((data) => {
            if (data?.ok) {
              messageApi.destroy();
              messageApi.open({
                type: 'success',
                content: 'Muaffaqiyatli tekshiruv',
              });
              localStorage.setItem(
                'access_token',
                JSON.stringify(data?.access_token),
              );
              setToken(data?.access_token);
              navigate('/');
            } else {
              messageApi.destroy();
              messageApi.open({
                type: 'error',
                content: "Ma'lumot xato",
                duration: 0,
              });
            }
          })
          .catch((err) => {
            console.log(err);
            messageApi.destroy();
            messageApi.open({
              type: 'error',
              content: "Ma'lumotlarni to'ldiring",
            });
          });
      } else if (phone_number.length === 9) {
        const number = '998' + phone_number;
        fetch(api + '/auth/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone_number: number,
            password,
          }),
        })
          .then((re) => re.json())
          .then((data) => {
            if (data?.ok) {
              messageApi.destroy();
              messageApi.open({
                type: 'success',
                content: 'Muaffaqiyatli tekshiruv',
              });
              localStorage.setItem(
                'access_token',
                JSON.stringify(data?.access_token),
              );
              setToken(data?.access_token);
              navigate('/');
            } else {
              messageApi.destroy();
              messageApi.open({
                type: 'error',
                content: "Ma'lumot xato",
                duration: 0,
              });
            }
          })
          .catch((err) => {
            console.log(err);
            messageApi.destroy();
            messageApi.open({
              type: 'error',
              content: "Ma'lumotlarni to'ldiring",
            });
          });
      } else {
        messageApi.destroy();
        messageApi.open({
          type: 'error',
          content: "Ma'lumotlarni to'ldiring",
        });
      }
    } else {
      messageApi.destroy();
      messageApi.open({
        type: 'error',
        content: "Ma'lumotlarni to'ldiring",
      });
    }
  };

  return (
    <div className="auth login">
      {contextHolder}
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>{authLang[l].kirish}</h2>
      <p>
        {authLang[l].biz}{' '}
        <Link to={'/registration'}>{authLang[l].registr}</Link>
      </p>
      <label>
        <span>{authLang[l].tel}</span>
        <input ref={number} onKeyDown={phone} type="text" />
      </label>
      <label>
        <span>{authLang[l].pas}</span>
        <input ref={pass} maxLength={8} type="password" />
      </label>
      <Link className="parol-update" to={'/password'}>
        {authLang[l].reset}
      </Link>
      <Button onClick={click} className="kirish" variant="contained">
        {authLang[l].kirish}
      </Button>
    </div>
  );
}

export default Login;

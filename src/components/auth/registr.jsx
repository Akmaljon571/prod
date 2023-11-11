import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import { message } from 'antd';
import { State, api } from '../../context';
import { authLang } from './auth.lang';
import logo from '../../img/LinCor.svg';
import './auth.scss';

function Registr() {
  const number = useRef();
  const pass = useRef();
  const pass2 = useRef();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { token, l } = useContext(State);

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
    const password2 = pass2.current?.value;
    if (
      tell?.length === 14 &&
      password?.length === 8 &&
      password === password2
    ) {
      const phone = tell.split(' ').join('');
      const phone_number =
        '998' + phone.split('(').join('').split(')').join('');

      messageApi.open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 0,
      });
      fetch(api + '/auth/register', {
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
            localStorage.setItem('registr', JSON.stringify(phone_number));
            navigate('/registration/code');
          } else {
            messageApi.destroy();
            messageApi.open({
              type: 'error',
              content: "Ma'lumot xato",
              duration: 0,
            });
          }
        })
        .catch((err) => console.log(err));
    } else if (
      Number(tell.split(' ').join('').split('+').join('')) &&
      password.length === 8
    ) {
      const phone_number = tell.split(' ').join('').split('+').join('');
      if (phone_number.length === 12) {
        fetch(api + '/auth/register', {
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
              localStorage.setItem('registr', JSON.stringify(phone_number));
              navigate('/registration/code');
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
        fetch(api + '/auth/register', {
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
              localStorage.setItem('registr', JSON.stringify(phone_number));
              navigate('/registration/code');
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
      messageApi.open({
        type: 'error',
        content: "Ma'lumotlarni to'ldiring",
      });
    }
  };

  return (
    <div className="auth registr">
      {contextHolder}
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>{authLang[l].t10}</h2>
      <p>
        {authLang[l].biz} <Link to={'/login'}>{authLang[l].kirish}</Link>
      </p>
      <label>
        <span>{authLang[l].tel}</span>
        <input ref={number} onKeyDown={phone} type="text" />
      </label>
      <label>
        <span>{authLang[l].t11}</span>
        <input maxLength={8} ref={pass} type="password" />
      </label>
      <label>
        <span>{authLang[l].t12}</span>
        <input maxLength={8} ref={pass2} type="password" />
      </label>
      <Button onClick={click} className="kirish" variant="contained">
        {authLang[l].ok}
      </Button>
    </div>
  );
}

export default Registr;

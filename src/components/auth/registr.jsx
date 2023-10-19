import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import { Button } from '@mui/material';
import './auth.scss';
import { useRef } from 'react';
import { message } from 'antd';
import { api } from '../../context';

function Registr() {
  const number = useRef();
  const pass = useRef();
  const pass2 = useRef();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

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
      <h2>Ro’yxatdan o’tish</h2>
      <p>
        Bizga qo’shiling! <Link to={'/login'}>Kirish</Link>
      </p>
      <label>
        <span>Telefon raqamingiz</span>
        <input ref={number} onKeyDown={phone} type="text" />
      </label>
      <label>
        <span>Yangi parol</span>
        <input maxLength={8} ref={pass} type="password" />
      </label>
      <label>
        <span>Yangi parolni takrorlang</span>
        <input maxLength={8} ref={pass2} type="password" />
      </label>
      <Button onClick={click} className="kirish" variant="contained">
        Tasdiqlash
      </Button>
    </div>
  );
}

export default Registr;

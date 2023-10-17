import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import { Button } from '@mui/material';
import './auth.scss';
import { useRef } from 'react';
import { message } from 'antd';
import { api } from '../../context';

function PasswordUpdate() {
  const { code, phone: phone_number } = JSON.parse(
    localStorage.getItem('password-phone-code'),
  );
  const passRef = useRef();
  const passRef1 = useRef();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const click = () => {
    const password = passRef.current.value;
    const pass1 = passRef1.current.value;
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });

    if (password?.length === 8 && password === pass1) {
      fetch(api + '/auth/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number,
          code,
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
            navigate('/login');
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
      <h2>Parolni tiklash</h2>
      <p>Yangi parolni tiklang va doimgidek saytimizdan foydalaning</p>
      <label>
        <span>Yangi parol</span>
        <input ref={passRef} maxLength={8} type="password" />
      </label>
      <label>
        <span>Yangi parolni takrorlang</span>
        <input ref={passRef1} maxLength={8} type="password" />
      </label>
      <Button onClick={click} className="kirish" variant="contained">
        Tasdiqlash
      </Button>
    </div>
  );
}

export default PasswordUpdate;

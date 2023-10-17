import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import { Button } from '@mui/material';
import './auth.scss';
import { message } from 'antd';
import { State, api } from '../../context';
import { useContext, useRef } from 'react';

function RegistrCode() {
  const [messageApi, contextHolder] = message.useMessage();
  const phone = JSON.parse(localStorage.getItem('registr'));
  const codeRef = useRef();
  const navigate = useNavigate();
  const { setToken } = useContext(State);

  const codeFilter = (e) => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    if (!number.includes(Number(e.key)) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  const click = () => {
    const code = codeRef.current?.value;
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });

    if (code?.length === 4) {
      fetch(api + '/auth/verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: '998910056961',
          code,
        }),
      })
        .then((re) => re.json())
        .then((data) => {
          if (data?.ok) {
            messageApi.destroy();
            messageApi.open({
              type: 'success',
              content: "Ro'yxatga olindingiz",
            });
            localStorage.setItem(
              'access_token',
              JSON.stringify({ access_token: data?.access_token }),
            );
            setToken(data?.access_token);
            navigate('/registration/profil');
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

  const reset = () => {
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });

    fetch(api + '/auth/forget-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone_number: '998910056961',
      }),
    })
      .then((re) => re.json())
      .then((data) => {
        if (data?.ok) {
          messageApi.destroy();
          messageApi.open({
            type: 'success',
            content: "Sms jo'natildi",
          });
        } else {
          messageApi.destroy();
          messageApi.open({
            type: 'error',
            content: "Ma'lumot xato",
            duration: 0,
          });
        }
      });
  };

  return (
    <div className="auth registrCode">
      {contextHolder}
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>Tasdiqlash</h2>
      <p>{phone} ga yuborilgan maxfiy kodni kiriting.</p>
      <label>
        <span>Kodni kiriting</span>
        <input ref={codeRef} maxLength={4} onKeyDown={codeFilter} type="text" />
      </label>
      <span
        onClick={reset}
        style={{ cursor: 'pointer' }}
        className="parol-update"
      >
        Kodni qayta yuborish.
      </span>
      <Button onClick={click} className="kirish" variant="contained">
        Tasdiqlash
      </Button>
    </div>
  );
}

export default RegistrCode;

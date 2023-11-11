import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { message } from 'antd';
import { State, api } from '../../context';
import { useContext, useEffect, useRef, useState } from 'react';
import { phoneFN } from '../../func/phone';
import { authLang } from './auth.lang';
import time from '../../img/Time.svg';
import logo from '../../img/LinCor.svg';
import './auth.scss';

function RegistrCode() {
  const [messageApi, contextHolder] = message.useMessage();
  const phone = JSON.parse(localStorage.getItem('registr'));
  const codeRef = useRef();
  const navigate = useNavigate();
  const [vaqt, setVaqt] = useState('00:59');
  const { setToken, l } = useContext(State);

  useEffect(() => {
    if (!phone) {
      navigate('/registration');
    }

    setTimeout(() => {
      const a = Number(vaqt.split(':')[1]);
      if (a !== 0) {
        if (a - 1 > 9) {
          setVaqt(`00:${a - 1}`);
        } else if (a - 1 <= 9) {
          setVaqt(`00:0${a - 1}`);
        }
      } else {
        setVaqt('00:00');
      }
    }, 1000);
  }, [vaqt, phone, navigate]);

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
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: phone,
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
              JSON.stringify(data?.access_token),
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

    fetch(api + '/auth/resend', {
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
          setVaqt('00:59');
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
      <h2>{authLang[l].ok}</h2>
      <p>
        {phoneFN(phone)} {authLang[l].code}
      </p>
      <label>
        <span>{authLang[l].sendCode}</span>
        <input ref={codeRef} maxLength={4} onKeyDown={codeFilter} type="text" />
      </label>
      {vaqt?.split(':')[1] !== '00' ? (
        <span
          style={{
            cursor: 'pointer',
            color: '#CCD2E3',
            display: 'flex',
            gap: '20px',
          }}
          className="parol-update"
        >
          {authLang[l].resetCode}
          <img width={24} height={24} src={time} alt="" />
          {vaqt}
        </span>
      ) : (
        <span
          onClick={reset}
          style={{ cursor: 'pointer' }}
          className="parol-update"
        >
          {authLang[l].resetCode}
        </span>
      )}
      <Button onClick={click} className="kirish" variant="contained">
        {authLang[l].ok}
      </Button>
    </div>
  );
}

export default RegistrCode;

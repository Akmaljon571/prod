import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import { Button } from '@mui/material';
import { phoneFN } from '../../func/phone';
import { message } from 'antd';
import { api } from '../../context';
import { useEffect, useRef, useState } from 'react';
import time from '../../img/Time.svg';
import './auth.scss';

function PasswordCode() {
  const { phone } = JSON.parse(localStorage.getItem('password-phone'));
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [vaqt, setVaqt] = useState('00:59');
  const codeRef = useRef();

  useEffect(() => {
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
  }, [vaqt]);

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
        phone_number: phone,
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

  const click = () => {
    const code = codeRef.current?.value;
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });
    if (code?.length === 4) {
      localStorage.removeItem('password-phone');
      localStorage.setItem(
        'password-phone-code',
        JSON.stringify({ phone, code }),
      );
      navigate('/password/update');
    } else {
      messageApi.destroy();
      messageApi.open({
        type: 'error',
        content: "Ma'lumotlarni to'ldiring",
      });
    }
  };

  const codeFilter = (e) => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    if (!number.includes(Number(e.key)) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  return (
    <div className="auth passwordCode">
      {contextHolder}
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>Tasdiqlash</h2>
      <p>{phoneFN(phone)} ga yuborilgan maxfiy kodni kiriting.</p>
      <label>
        <span>Kodni kiriting</span>
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
          Kodni qayta yuborish.
          <img width={24} height={24} src={time} alt="" />
          {vaqt}
        </span>
      ) : (
        <span
          onClick={reset}
          style={{ cursor: 'pointer' }}
          className="parol-update"
        >
          Kodni qayta yuborish.
        </span>
      )}
      <Button onClick={click} className="kirish" variant="contained">
        Tasdiqlash
      </Button>
    </div>
  );
}

export default PasswordCode;

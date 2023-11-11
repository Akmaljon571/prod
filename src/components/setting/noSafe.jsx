import { Button } from '@mui/material';
import { message } from 'antd';
import { useContext, useRef, useState } from 'react';
import { api, State } from '../../context';
import { settingLang } from './setting.lang';

function NoSafe() {
  const tellRef = useRef();
  const oldPass = useRef();
  const newPass = useRef();
  const resetPass = useRef();
  const codeRef = useRef();
  const { token, l } = useContext(State);
  const [number, setNumber] = useState(0);
  const [step, setStep] = useState(1);

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

  const codeFilter = (e) => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    if (!number.includes(Number(e.key)) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  const updatePhone = () => {
    const value = tellRef.current.value;

    if (value && value?.length === 14) {
      const tell = value.split('(').join('').split(')').join(' ');

      message.loading("Raqam jo'natildi");
      fetch(api + '/me/send-code-update-phone-number', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          phone_number: '998' + tell.split(' ').join(''),
        }),
      })
        .then((re) => re.json())
        .then((data) => {
          if (data.ok) {
            message.destroy();
            message.success("Raqamga Kod jo'natildi");
            setNumber(tell);
          } else {
            message.destroy();
            message.error('Raqamga Xato');
          }
        });
    } else if (Number(value.split(' ').join('').split('+').join(''))) {
      const phone_number = value.split(' ').join('').split('+').join('');
      if (phone_number.length === 12) {
        fetch(api + '/me/send-code-update-phone-number', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            phone_number,
          }),
        })
          .then((re) => re.json())
          .then((data) => {
            if (data.ok) {
              message.destroy();
              message.success("Raqamga Kod jo'natildi");
              setNumber(phone_number);
            } else {
              message.destroy();
              message.error('Raqamga Xato');
            }
          })
          .catch((err) => {
            console.log(err);
            message.destroy();
            message.error("Raqamni to'lliq kiriting");
          });
      } else if (phone_number.length === 9) {
        const number = '998' + phone_number;
        fetch(api + '/me/send-code-update-phone-number', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            phone_number: number,
          }),
        })
          .then((re) => re.json())
          .then((data) => {
            if (data.ok) {
              message.destroy();
              message.success("Raqamga Kod jo'natildi");
              setNumber(phone_number);
            } else {
              message.destroy();
              message.error('Raqamga Xato');
            }
          })
          .catch((err) => {
            console.log(err);
            message.destroy();
            message.error("Raqamni to'lliq kiriting");
          });
      } else {
        message.destroy();
        message.error("Raqamni to'lliq kiriting");
      }
    } else {
      message.error("Raqamni to'lliq kiriting");
    }
  };

  const updatePassword = () => {
    const old_password = oldPass.current.value;
    const password = newPass.current.value;
    const resetPassword = resetPass.current.value;

    if (old_password && password && password === resetPassword) {
      message.loading("Ma'lumotlar jo'natildi");
      fetch(api + '/me/password', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ password, old_password }),
      })
        .then((re) => re.json())
        .then((data) => {
          console.log(data);
          if (data.ok) {
            message.destroy();
            message.success("Password O'zgartirildi");
          } else {
            message.destroy();
            message.error("Ma'lumotlar Hato");
          }
        });
    } else {
      message.error("Ma'lumotlarni to'g'ri to'ldiring");
    }
  };

  const sendCode = () => {
    const code = codeRef.current?.value;

    if (code && code?.length === 4) {
      message.loading("Kod jo'natildi");

      fetch(api + '/me/phone-number', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ code }),
      })
        .then((re) => re.json())
        .then((data) => {
          if (data.ok) {
            setStep(2);
            message.destroy();
            message.success("Password O'zgartirildi");
          } else {
            message.destroy();
            message.error('Kod Xato');
          }
        });
    } else {
      message.error("Kodni to'g'ri kiriting");
    }
  };

  return (
    <div className="no_safe">
      <div className="one">
        <h4>{settingLang[l].p4}</h4>
        <p>{settingLang[l].p5}</p>
      </div>
      <div className="two">
        <label>
          <h4>{settingLang[l].p6}</h4>
          <input ref={tellRef} onKeyDown={phone} type="text" />
        </label>
        <Button onClick={updatePhone} variant="contained">
          {settingLang[l].ok}
        </Button>
      </div>
      <div className="three">
        <div>
          <h4>{settingLang[l].p7}</h4>
          <span>{settingLang[l].p8}</span>
        </div>
        <label>
          <span>{settingLang[l].p9}</span>
          <input maxLength={8} ref={oldPass} type="text" />
        </label>
        <label>
          <span>{settingLang[l].p10}</span>
          <input maxLength={8} ref={newPass} type="text" />
        </label>
        <label>
          <span>{settingLang[l].p11}</span>
          <input maxLength={8} ref={resetPass} type="text" />
        </label>
        <Button onClick={updatePassword} variant="contained">
          {settingLang[l].ok}
        </Button>
      </div>
      {number ? (
        <div className="modal">
          <span onClick={() => setNumber(0)} className="modal-fixed"></span>
          <div className="modal-card">
            {step === 1 ? (
              <>
                <h5>{settingLang[l].p12}</h5>
                <p>
                  +998{number} {settingLang[l].p13}
                </p>
                <input
                  ref={codeRef}
                  onKeyDown={codeFilter}
                  maxLength={4}
                  type="text"
                />
                <Button onClick={sendCode} variant="contained">
                  {settingLang[l].ok}
                </Button>
              </>
            ) : (
              <>
                <span>{settingLang[l].p14}</span>
                <div
                  onClick={() => {
                    setNumber(0);
                    setStep(1);
                  }}
                >
                  {settingLang[l].okey}
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NoSafe;

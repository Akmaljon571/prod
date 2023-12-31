import { useContext, useEffect, useRef, useState } from 'react';
import { State, api } from '../../context';
import { nameOneLetter } from '../../func/name';
import { Button } from '@mui/material';
import { message } from 'antd';
import { settingLang } from './setting.lang';

function Safe() {
  const [me, setMe] = useState({});
  const { token, l } = useContext(State);
  const [image, setImage] = useState('');
  const name = useRef();
  const last = useRef();
  const email = useRef();

  useEffect(() => {
    fetch(api + '/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => setMe(data?.me));
  }, [token]);

  const updateImage = () => {
    const formData = new FormData();
    formData.append('image', image);

    if (image) {
      message.loading('Send File');
      fetch(api + '/customer/file', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then((re) => re.json())
        .then((data) => {
          if (data.ok) {
            fetch(api + '/me', {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ image: data.files.image }),
            })
              .then((re) => re.json())
              .then((data) => {
                if (data.ok) {
                  message.success('Rasm Saqlandi');
                } else {
                  message.error('Rasm joylashda Hatolik');
                }
              });
          } else {
            message.error('Rasm joylashda Hatolik');
          }
        })
        .catch((err) => message.error('Rasm joylashda Hatolik'));
    } else {
      message.error('Rasm joylashtiring');
    }
  };

  const updateData = () => {
    const obj = {
      first_name: name.current?.value || me.first_name,
      last_name: last.current?.value || me.last_name,
      email: email?.current?.value || me.email,
    };
    message.loading("Ma'lumotlar jo'natildi");

    fetch(api + '/me', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(obj),
    })
      .then((re) => re.json())
      .then((data) => {
        if (data.ok) {
          message.destroy();
          message.success("Ma'lumotlar o'zgartirildi");
        } else {
          message.destroy();
          message.error("Ma'lumot o'zgarishda Xatolik");
        }
      });
  };

  return (
    <div className="safe">
      <div className="safe-top">
        <div className="image">
          <label>
            {image || me?.image ? (
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : api + '/customer/file/' + me.image
                }
                alt="User_Imager"
              />
            ) : (
              <p>{nameOneLetter(me?.first_name)}</p>
            )}
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              accept="image/x-png,image/gif,image/jpeg"
              className="none"
            />
          </label>
          <div>
            <p className="text">{settingLang[l].imgS}</p>
            <span className="span">{settingLang[l].imgT}</span>
          </div>
        </div>
        <div className="btns">
          <Button
            onClick={() => setImage('')}
            variant="outlined"
            className="del"
          >
            {settingLang[l].del}
          </Button>
          <Button onClick={updateImage} variant="outlined" className="ok">
            {settingLang[l].ok}
          </Button>
        </div>
      </div>
      <div className="safe-bottom">
        <div>
          <p className="text">{settingLang[l].secretS}</p>
          <span className="span">{settingLang[l].secretT}</span>
        </div>
        <div className="inputFath">
          <label>
            <span>{settingLang[l].p1}</span>
            <input
              ref={name}
              defaultValue={me?.first_name}
              type="text"
              placeholder={settingLang[l].p1}
            />
          </label>
          <label>
            <span>{settingLang[l].p2}</span>
            <input
              ref={last}
              defaultValue={me?.last_name}
              type="text"
              placeholder={settingLang[l].p2}
            />
          </label>
        </div>
        <div className="inputFath">
          <label>
            <span>{settingLang[l].p3}</span>
            <input
              ref={email}
              defaultValue={me?.email}
              type="text"
              placeholder={settingLang[l].p3}
            />
          </label>
        </div>
        <Button onClick={updateData} variant="contained">
          {settingLang[l].ok}
        </Button>
      </div>
    </div>
  );
}

export default Safe;

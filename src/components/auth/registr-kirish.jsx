import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { State, api } from '../../context';
import { message } from 'antd';
import logo from '../../img/LinCor.svg';
import './auth.scss';

function RegistrFinish() {
  const [img, setImg] = useState('');
  const { token } = useContext(State);
  const [load, setLoad] = useState(false);
  const [imgString, setImgString] = useState('');
  const nameRef = useRef();
  const lastRef = useRef();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/registration');
    }
  }, [token, navigate]);

  const sendImage = (e) => {
    const formData = new FormData();
    setLoad(true);
    formData.append('image', e.target.files[0]);
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
          setLoad(false);
          setImg(URL.createObjectURL(e.target.files[0]));
          setImgString(data.files.image);
        }
      });
  };

  const click = () => {
    const first_name = nameRef.current?.value;
    const last_name = lastRef.current?.value;

    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });

    fetch(api + '/me', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        first_name,
        last_name,
        image: imgString,
      }),
    })
      .then((re) => re.json())
      .then((data) => {
        if (data.ok) {
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
  };

  return (
    <div className="auth finish">
      {contextHolder}
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>Profil</h2>
      <p>Ma’lumotingizni kiriting.</p>
      <div>
        <img
          src={img || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}
          alt=""
        />
        <p>JPG yoki PNG formatdagi sur’atingizni joylang.</p>
        <label htmlFor="a">
          <span>{load ? 'loading...' : 'Rasm joylash'}</span>
          <input
            onChange={sendImage}
            id="a"
            type="file"
            style={{ display: 'none' }}
          />
        </label>
      </div>
      <label>
        <span>Ismingiz</span>
        <input ref={nameRef} type="text" />
      </label>
      <label>
        <span>Familiyangiz</span>
        <input ref={lastRef} type="text" />
      </label>
      <Button onClick={click} className="kirish" variant="contained">
        Kirish
      </Button>
    </div>
  );
}

export default RegistrFinish;

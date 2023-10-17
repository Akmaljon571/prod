import { Link } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import { Button } from '@mui/material';
import './auth.scss';
import { useState } from 'react';

function RegistrFinish() {
  const [img, setImg] = useState('');

  return (
    <div className="auth finish">
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>Profil</h2>
      <p>Ma’lumotingizni kiriting.</p>
      <div>
        <img src={img || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} alt="" />
        <p>JPG yoki PNG formatdagi
            sur’atingizni joylang.</p>
        <label htmlFor='a'>
          <span>Rasm joylash</span>
          <input onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} id='a' type="file" style={{display: "none"}} /> 
        </label>
      </div>
      <label>
        <span>Ismingiz</span>
        <input type="text" />
      </label>
      <label>
        <span>Familiyangiz</span>
        <input type="text" />
      </label>
      <Button className="kirish" variant="contained">
        Kirish
      </Button>
    </div>
  );
}

export default RegistrFinish;

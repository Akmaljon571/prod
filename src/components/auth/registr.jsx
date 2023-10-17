import { Link } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import { Button } from '@mui/material';
import './auth.scss';

function Registr() {
  return (
    <div className="auth registr">
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>Ro’yxatdan o’tish</h2>
      <p>
        Bizga qo’shiling! <Link to={'/login'}>Kirish</Link>
      </p>
      <label>
        <span>Telefon raqamingiz</span>
        <input type="text" />
      </label>
      <label>
        <span>Yangi parol</span>
        <input type="password" />
      </label>
      <label>
        <span>Yangi parolni takrorlang</span>
        <input type="password" />
      </label>
      <Button className="kirish" variant="contained">
        Tasdiqlash
      </Button>
    </div>
  );
}

export default Registr;

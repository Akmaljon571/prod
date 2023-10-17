import { Link } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import { Button } from '@mui/material';
import './auth.scss';

function PasswordUpdate() {
  return (
    <div className="auth passwordUpdate">
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>Parolni tiklash</h2>
      <p>Yangi parolni tiklang va doimgidek saytimizdan foydalaning</p>
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

export default PasswordUpdate;

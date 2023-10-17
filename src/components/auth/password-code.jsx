import { Link } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import { Button } from '@mui/material';
import './auth.scss';

function PasswordCode() {
  return (
    <div className="auth passwordCode">
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>Tasdiqlash</h2>
      <p>+9989 999 99 99 ga yuborilgan maxfiy kodni kiriting.</p>
      <label>
        <span>Kodni kiriting</span>
        <input type="text" />
      </label>
      <Link className="parol-update" to={'/password'}>
        Kodni qayta yuborish.
      </Link>
      <Button className="kirish" variant="contained">
        Tasdiqlash
      </Button>
    </div>
  );
}

export default PasswordCode;

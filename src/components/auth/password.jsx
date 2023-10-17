import { Link } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import { Button } from '@mui/material';
import './auth.scss';

function Password() {
  return (
    <div className="auth password">
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>Parolni kitirish</h2>
      <p>
        Parolni unutgan bo’lsangiz telefon raqamingiz orqali tiklashingiz mumkun
      </p>
      <label>
        <span>Telefon raqamingiz</span>
        <input type="text" />
      </label>
      <Button className="kirish" variant="contained">
        Kirish
      </Button>
    </div>
  );
}

export default Password;

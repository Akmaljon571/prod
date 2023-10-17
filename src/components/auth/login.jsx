import { Link } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import { Button } from '@mui/material';
import './auth.scss';

function Login() {
  return (
    <div className="auth login">
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>Kirish</h2>
      <p>
        Bizga qo’shiling! <Link to={'/registration'}>Ro’yxatdan o’tish</Link>
      </p>
      <label>
        <span>Telefon raqamingiz</span>
        <input type="text" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" />
      </label>
      <Link className="parol-update" to={'/password'}>
        Parolni unutdingizmi?
      </Link>
      <Button className="kirish" variant="contained">
        Kirish
      </Button>
    </div>
  );
}

export default Login;

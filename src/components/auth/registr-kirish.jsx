import { Link } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import { Button } from '@mui/material';
import './auth.scss';

function RegistrFinish() {
  

  return (
    <div className="auth finish">
      <Link to={'/'}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <h2>Profil</h2>
      <p>Ma’lumotingizni kiriting.</p>
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

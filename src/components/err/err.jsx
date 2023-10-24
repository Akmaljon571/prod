import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { errLang } from './err.lang';
import { useContext } from 'react';
import { State } from '../../context';
import './err.scss';

function Error() {
  const navigate = useNavigate();
  const { l } = useContext(State);

  return (
    <div className="error">
      <div className="left">
        <h3>{errLang[l].text}</h3>
        <Button
          onClick={() => navigate('/dars')}
          className="media-margin"
          variant="contained"
        >
          {errLang[l].b1}
        </Button>
        <Button onClick={() => navigate('/')} variant="contained">
          {errLang[l].b2}
        </Button>
      </div>
      <div className="right">404</div>
    </div>
  );
}

export default Error;

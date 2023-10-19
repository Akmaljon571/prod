import { Button } from '@mui/material';
import './err.scss';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  return (
    <div className="error">
      <div className="left">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
        <Button
          onClick={() => navigate('/dars')}
          className="media-margin"
          variant="contained"
        >
          Kurslarni o'rganing
        </Button>
        <Button onClick={() => navigate('/')} variant="contained">
          Asosiy sahifa
        </Button>
      </div>
      <div className="right">404</div>
    </div>
  );
}

export default Error;

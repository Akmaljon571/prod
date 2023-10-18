import { Button, Checkbox, FormControlLabel } from '@mui/material';
import girl from '../../img/message.png';
import './message.scss';

function Message() {
  return (
    <>
      <img className="none girl-media" src={girl} alt="" />
      <div className="message">
        <div className="left">
          <h2>Xabar yuboring.</h2>

          <div className="form">
            <input type="text" placeholder="Ism" />
            <input type="text" placeholder="Telefon Nomer" />
            <FormControlLabel className='checkbox' control={<Checkbox defaultChecked sx={{
              color: "#9CBDFC",
              '&.Mui-checked': {
                color: "#9CBDFC",
              },
            }} />} label="Maxfiylik siyosati" />
            <Button variant="contained">Yuborish</Button>
          </div>
        </div>
        <img className="girl" src={girl} alt="" />
      </div>
    </>
  );
}

export default Message;

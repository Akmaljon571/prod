import { Button } from '@mui/material';
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
            <textarea
              placeholder="Xabar yuboring"
              cols="30"
              rows="10"
            ></textarea>
            <Button variant="contained">Yuborish</Button>
          </div>
        </div>
        <img className="girl" src={girl} alt="" />
      </div>
    </>
  );
}

export default Message;

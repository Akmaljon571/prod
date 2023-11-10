import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { useContext } from 'react';
import { State } from '../../context';
import { msgLang } from './msg.lang';
import girl from '../../img/message.png';
import './message.scss';

function Message() {
  const { l } = useContext(State);

  return (
    <>
      <img className="none girl-media" src={girl} alt="" />
      <div className="message">
        <div className="left">
          <h2>{msgLang[l].title}</h2>

          <div className="form">
            <input type="text" placeholder={`${msgLang[l].ism}`} />
            <input type="text" placeholder={`${msgLang[l].phone}`} />
            <FormControlLabel
              className="checkbox"
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: '#9CBDFC',
                    '&.Mui-checked': {
                      color: '#9CBDFC',
                    },
                  }}
                />
              }
              label={`${msgLang[l].s}`}
            />
            <Button variant="contained">{msgLang[l].send}</Button>
          </div>
        </div>
        <img className="girl" src={girl} alt="" />
      </div>
    </>
  );
}

export default Message;

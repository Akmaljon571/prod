import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { State } from '../../context';
import { downLang } from './down.lang';
import vector from '../../img/Vector 68 (1).svg';
import vectorActive from '../../img/Vector 68.svg';
import './dropdown.scss';

function Dropdown() {
  const [openId, setOpenId] = useState(3);
  const { l } = useContext(State);

  return (
    <div className="dropdown">
      <h2>{downLang[l].faq}</h2>
      <ul>
        <li className={openId === 1 ? 'active' : ''}>
          <div>
            <h4>{downLang[l].s1}</h4>
            <p>{downLang[l].t1}</p>
          </div>
          {openId === 1 ? (
            <Button onClick={() => setOpenId(0)} variant="contained">
              <img src={vectorActive} alt="vectorActive" />
            </Button>
          ) : (
            <Button onClick={() => setOpenId(1)} variant="text">
              <img src={vector} alt="vector" />
            </Button>
          )}
        </li>
        <li className={openId === 2 ? 'active' : ''}>
          <div>
            <h4>{downLang[l].s2}</h4>
            <p>{downLang[l].t2}</p>
          </div>
          {openId === 2 ? (
            <Button onClick={() => setOpenId(0)} variant="contained">
              <img src={vectorActive} alt="vectorActive" />
            </Button>
          ) : (
            <Button onClick={() => setOpenId(2)} variant="text">
              <img src={vector} alt="vector" />
            </Button>
          )}
        </li>
        <li className={openId === 3 ? 'active' : ''}>
          <div>
            <h4>{downLang[l].s3}</h4>
            <p>{downLang[l].t3}</p>
          </div>
          {openId === 3 ? (
            <Button onClick={() => setOpenId(0)} variant="contained">
              <img src={vectorActive} alt="vectorActive" />
            </Button>
          ) : (
            <Button onClick={() => setOpenId(3)} variant="text">
              <img src={vector} alt="vector" />
            </Button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;

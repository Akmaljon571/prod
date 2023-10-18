import { Button } from '@mui/material';
import vector from '../../img/Vector 68 (1).svg';
import vectorActive from '../../img/Vector 68.svg';
import { useState } from 'react';
import './dropdown.scss';

function Dropdown() {
  const [openId, setOpenId] = useState(3);

  return (
    <div className="dropdown">
      <h2>FAQ</h2>
      <ul>
        <li className={openId === 1 ? 'active' : ''}>
          <div>
            <h4>Kursdan nima topaman</h4>
            <p>
              Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan
              so‘ng guruhingizga zoom zapisi tashlab beriladi
            </p>
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
            <h4>Kursdan nima topaman</h4>
            <p>
              Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan
              so‘ng guruhingizga zoom zapisi tashlab beriladi
            </p>
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
            <h4>Kursdan nima topaman</h4>
            <p>
              Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan
              so‘ng guruhingizga zoom zapisi tashlab beriladi
            </p>
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

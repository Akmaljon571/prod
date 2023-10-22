import { useContext, useEffect, useState } from 'react';
import Safe from './safe';
import NoSafe from './noSafe';
import SettingsIcon from '@mui/icons-material/Settings';
import HttpsIcon from '@mui/icons-material/Https';
import './setting.scss';
import { State } from '../../context';
import { useNavigate } from 'react-router-dom';

function Setting() {
  const [safe, setSafe] = useState(true);
  const { token } = useContext(State);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className="setting">
      <h1>Profil sozlamalari</h1>
      <div className="setting-fath">
        <div className="left">
          <div onClick={() => setSafe(true)} className={safe ? 'active' : ''}>
            <SettingsIcon />
            Profil sozlamalari
          </div>
          <div onClick={() => setSafe(false)} className={safe ? '' : 'active'}>
            <HttpsIcon />
            Xavfsizlik
          </div>
        </div>
        {safe ? <Safe /> : <NoSafe />}
      </div>
    </div>
  );
}

export default Setting;

import { useContext, useEffect, useState } from 'react';
import Safe from './safe';
import NoSafe from './noSafe';
import SettingsIcon from '@mui/icons-material/Settings';
import HttpsIcon from '@mui/icons-material/Https';
import './setting.scss';
import { State } from '../../context';
import { useNavigate } from 'react-router-dom';
import { settingLang } from './setting.lang';

function Setting() {
  const [safe, setSafe] = useState(true);
  const { token, l } = useContext(State);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className="setting">
      <h1>{settingLang[l].t1}</h1>
      <div className="setting-fath">
        <div className="left">
          <div onClick={() => setSafe(true)} className={safe ? 'active' : ''}>
            <SettingsIcon />
            {settingLang[l].t1}
          </div>
          <div onClick={() => setSafe(false)} className={safe ? '' : 'active'}>
            <HttpsIcon />
            {settingLang[l].t2}
          </div>
        </div>
        {safe ? <Safe /> : <NoSafe />}
      </div>
    </div>
  );
}

export default Setting;

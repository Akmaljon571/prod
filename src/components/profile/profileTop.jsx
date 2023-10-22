import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import { nameOneLetter } from '../../func/name';
import { phoneFN } from '../../func/phone';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { src } from '../../func/src';

function ProfileTop() {
  const [user, setUser] = useState({});
  const { token } = useContext(State);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(api + '/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => setUser(data.me));
  }, [setUser, token]);

  return (
    <div className="profile-top">
      <div className="bg-image"></div>
      <div className="data">
        <div>
          <div className="img">
            {user.image ? (
              <img src={src(token, user.image)} alt="User Profile" />
            ) : (
              <span>{nameOneLetter(user?.first_name)}</span>
            )}
          </div>
          <div>
            <h3>
              {user?.first_name} {user?.last_name}
            </h3>
            <p>{phoneFN(user?.phone_number)}</p>
          </div>
        </div>
        <Button onClick={() => navigate('/setting')} variant="contained">
          Profil sozlamasi
        </Button>
      </div>
    </div>
  );
}

export default ProfileTop;

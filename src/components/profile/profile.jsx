import ProfileTop from './profileTop';
import ProfileList from './profileList';
import { profileLang } from './profile.lang';
import { useContext } from 'react';
import { State } from '../../context';
import './profile.scss';

function Profile() {
  const { l } = useContext(State);

  return (
    <div className="profile">
      <h1>{profileLang[l].title}</h1>
      <ProfileTop />
      <ProfileList />
    </div>
  );
}

export default Profile;

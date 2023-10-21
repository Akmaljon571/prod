import ProfileTop from './profileTop';
import ProfileList from './profileList';
import './profile.scss';

function Profile() {
  return (
    <div className="profile">
      <h1>Mening kurslarim</h1>
      <ProfileTop />
      <ProfileList />
    </div>
  );
}

export default Profile;

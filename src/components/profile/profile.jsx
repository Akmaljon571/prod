import ProfileTop from './profileTop';
import './profile.scss';
import ProfileList from './profileList';

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

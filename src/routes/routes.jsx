import { Route, Routes } from 'react-router-dom';
import { DarsPage, Home } from '../page';
import {
  Login,
  Password,
  PasswordCode,
  PasswordUpdate,
  Registr,
  RegistrCode,
  RegistrFinish,
} from '../components';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password" element={<Password />} />
      <Route path="/password/code" element={<PasswordCode />} />
      <Route path="/password/update" element={<PasswordUpdate />} />
      <Route path="/registration" element={<Registr />} />
      <Route path="/registration/code" element={<RegistrCode />} />
      <Route path="/registration/profil" element={<RegistrFinish />} />
      <Route path="/dars" element={<DarsPage />} />
      {/* <Route path='/*' element={<Error />} /> */}
    </Routes>
  );
}

export default Routers;

import { Route, Routes } from 'react-router-dom';
import {
  AboutPage,
  AloqaPage,
  CoursesPage,
  DarsPage,
  ErrorPage,
  Home,
  ProfilePage,
  SettingPage,
} from '../page';
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
      <Route path="/courses/:id" element={<DarsPage />} />
      <Route path="/aloqa" element={<AloqaPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/about/:id" element={<AboutPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Routers;

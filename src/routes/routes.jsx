import { Route, Routes } from 'react-router-dom';
import { Home } from '../page';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/*' element={<Error />} /> */}
    </Routes>
  );
}

export default Routers;

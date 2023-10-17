import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState } from 'react';
import logo from '../../img/LinCor.svg';
import vector from '../../img/header-vector.svg';
import sVector from '../../img/profile-vector.svg';
import book from '../../img/book-open.svg';
import tolov from '../../img/credit-card.svg';
import profil from '../../img/user.svg';
import aloqa from '../../img/phone-call.svg';
import chiqish from '../../img/log-out.svg';
import hum from '../../img/hum.svg';
import './header.scss';

function Header() {
  // const { token } = useContext(State)
  const [prof, setProf] = useState(false);
  const [mediaModal, setMediaModal] = useState(false);
  const [list_none, setListNone] = useState(false);
  const token = true;

  return (
    <div className="header-fix">
      <header className="header">
        <nav>
          <Link to={'/'}>
            <img src={logo} alt="Company logo" />
          </Link>
          <ul>
            <li>
              <Link to={'/'}>Kurslar</Link>
            </li>
            <li>
              <Link to={'/'}>Topik</Link>
            </li>
            <li>
              <Link to={'/'}>Koreada o‘qish</Link>
            </li>
            <li>
              <Link to={'/'}>To’lov</Link>
            </li>
            <li>
              <Link to={'/'}>Aloqa</Link>
            </li>
          </ul>
        </nav>
        {!token ? (
          <Button
            style={{ borderRadius: '20px', textTransform: 'capitalize' }}
            variant="outlined"
            className="btn"
          >
            Kirish
            <img src={vector} alt="Vector" />
          </Button>
        ) : (
          <div onClick={() => setProf(true)} className="header-profile">
            {/* <img className='header-img' src="" alt="" /> */}
            <div className="header-img">A</div>
            <div className="header-name">Akmal</div>
            <img src={sVector} alt="Select Vector" />
          </div>
        )}
        {prof ? (
          <>
            <div className="header-modal">
              <div className="top">
                {/* <img className='header-modal-img' src="" alt="" /> */}
                <div className="header-modal-img">A</div>
                <p>Shahboz Aliyev</p>
              </div>
              <hr />
              <ul>
                <li>
                  <Link to={'/'}>
                    <img src={book} alt="Kurs" />
                    <p>Mening Kurslarim</p>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <img src={tolov} alt="Kurs" />
                    <p>To'lov</p>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <img src={profil} alt="Kurs" />
                    <p>Profilim</p>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <img src={aloqa} alt="Kurs" />
                    <p>Aloqa</p>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <img src={chiqish} alt="Kurs" />
                    <p>Chiqish</p>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : null}
        <img
          onClick={() => setMediaModal(true)}
          className="header-hum"
          src={hum}
          alt="Humberger"
        />
        {mediaModal ? (
          <div className="header-media-modal">
            {token ? (
              <div className="top">
                {/* <img className='header-modal-img' src="" alt="" /> */}
                <div className="header-modal-img">A</div>
                <p>Shahboz Aliyev</p>
              </div>
            ) : (
              <Button className="media_token-kirish" variant="outlined">
                Kirish
                <img src={vector} alt="Vector" />
              </Button>
            )}
            <img
              onClick={() => setListNone(!list_none)}
              className={
                list_none
                  ? 'header-media-modal_vector header-media-modal_rotate'
                  : 'header-media-modal_vector'
              }
              src={sVector}
              alt=""
            />
            <hr />
            <ul className="header-media-modal_navlink">
              <li>
                <Link to={'/'}>Kurslar</Link>
              </li>
              {list_none ? null : (
                <>
                  <li>
                    <Link to={'/'}>Topik</Link>
                  </li>
                  <li>
                    <Link to={'/'}>Koreada o‘qish</Link>
                  </li>
                  <li>
                    <Link to={'/'}>To’lov</Link>
                  </li>
                  <li>
                    <Link to={'/'}>Aloqa</Link>
                  </li>
                </>
              )}
            </ul>
            {token ? (
              <>
                <hr />
                <ul className="header-media-modal_profile">
                  <li>
                    <Link to={'/'}>
                      <img src={book} alt="Kurs" />
                      <p>Mening Kurslarim</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      <img src={tolov} alt="Kurs" />
                      <p>To'lov</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      <img src={profil} alt="Kurs" />
                      <p>Profilim</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      <img src={aloqa} alt="Kurs" />
                      <p>Aloqa</p>
                    </Link>
                  </li>
                  <li className="chiqish">
                    <Link to={'/'}>
                      <img src={chiqish} alt="Kurs" />
                      <p>Chiqish</p>
                    </Link>
                  </li>
                </ul>
              </>
            ) : null}
          </div>
        ) : null}
      </header>
      {prof || mediaModal ? (
        <span
          onClick={() => {
            setProf(false);
            setMediaModal(false);
          }}
          className="header-modal-fix"
        ></span>
      ) : null}
    </div>
  );
}

export default Header;

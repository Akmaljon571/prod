import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { State, api, tg } from '../../context';
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
import { nameOneLetter } from '../../func/name';

function Header() {
  const { token } = useContext(State);
  const [prof, setProf] = useState(false);
  const [mediaModal, setMediaModal] = useState(false);
  const [list_none, setListNone] = useState(false);
  const [me, setMe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(api + '/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => {
        setMe(data.me);
      });
  }, [token]);

  return (
    <>
      <div className="header-fix">
        <header className="header">
          <nav className="nav">
            <Link to={'/'}>
              <img src={logo} alt="Company logo" />
            </Link>
            <ul>
              <li>
                <Link to={'/courses'}>Kurslar</Link>
              </li>
              <li>
                <Link to={'/'}>Topik</Link>
              </li>
              <li>
                <Link to={'/about'}>Koreada o‘qish</Link>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href={tg}>
                  To’lov
                </a>
              </li>
              <li>
                <Link to={'/aloqa'}>Aloqa</Link>
              </li>
            </ul>
          </nav>
          <div style={{ width: '30%' }} className="nav header-select">
            <select>
              <option value="uz">Uz</option>
              <option value="uz">Uz</option>
            </select>
            {!token ? (
              <Button
                style={{ borderRadius: '20px', textTransform: 'capitalize' }}
                variant="contained"
                className="btn"
                onClick={() => navigate('/login')}
              >
                Kirish
              </Button>
            ) : (
              <div onClick={() => setProf(true)} className="header-profile">
                {me?.image ? (
                  <img
                    className="header-img"
                    src={api + '/customer/file/' + me.image}
                    alt=""
                  />
                ) : (
                  <div className="header-img">
                    {nameOneLetter(me?.first_name)}
                  </div>
                )}
                <div className="header-name">{me?.first_name}</div>
                <img src={sVector} alt="Select Vector" />
              </div>
            )}
          </div>
          {prof ? (
            <>
              <div className="header-modal">
                <div className="top">
                  {me?.image ? (
                    <img
                      className="header-modal-img"
                      src={api + '/customer/file/' + me.image}
                      alt=""
                    />
                  ) : (
                    <div className="header-modal-img">
                      {nameOneLetter(me?.first_name)}
                    </div>
                  )}
                  <p>
                    <span>{me?.first_name}</span> <span>{me?.last_name}</span>
                  </p>
                </div>
                <hr />
                <ul>
                  <li>
                    <Link to={'/profile'}>
                      <img src={book} alt="Kurs" />
                      <p>Mening Kurslarim</p>
                    </Link>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href={tg}>
                      <img src={tolov} alt="Kurs" />
                      <p>To'lov</p>
                    </a>
                  </li>
                  <li>
                    <Link to={'/setting'}>
                      <img src={profil} alt="Kurs" />
                      <p>Profilim</p>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/aloqa'}>
                      <img src={aloqa} alt="Kurs" />
                      <p>Aloqa</p>
                    </Link>
                  </li>
                  <li>
                    <a onClick={() => localStorage.clear()} href={'/'}>
                      <img src={chiqish} alt="Kurs" />
                      <p>Chiqish</p>
                    </a>
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
                  {me?.image ? (
                    <img
                      className="header-modal-img"
                      src={api + '/customer/file/' + me.image}
                      alt=""
                    />
                  ) : (
                    <div className="header-modal-img">
                      {nameOneLetter(me?.first_name)}
                    </div>
                  )}
                  <p>
                    <span>{me?.first_name}</span> <span>{me?.last_name}</span>
                  </p>
                </div>
              ) : (
                <Button
                  onClick={() => navigate('/login')}
                  className="media_token-kirish"
                  variant="outlined"
                >
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
                  <Link to={'/courses'}>Kurslar</Link>
                </li>
                {list_none ? null : (
                  <>
                    <li>
                      <Link to={'/'}>Topik</Link>
                    </li>
                    <li>
                      <Link to={'/about'}>Koreada o‘qish</Link>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href={tg}>
                        To’lov
                      </a>
                    </li>
                    <li>
                      <Link to={'/aloqa'}>Aloqa</Link>
                    </li>
                  </>
                )}
              </ul>
              {token ? (
                <>
                  <hr />
                  <ul className="header-media-modal_profile">
                    <li>
                      <Link to={'/profile'}>
                        <img src={book} alt="Kurs" />
                        <p>Mening Kurslarim</p>
                      </Link>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href={tg}>
                        <img src={tolov} alt="Kurs" />
                        <p>To'lov</p>
                      </a>
                    </li>
                    <li>
                      <Link to={'/setting'}>
                        <img src={profil} alt="Kurs" />
                        <p>Profilim</p>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/aloqa'}>
                        <img src={aloqa} alt="Kurs" />
                        <p>Aloqa</p>
                      </Link>
                    </li>
                    <li className="chiqish">
                      <a onClick={() => localStorage.clear()} href={'/'}>
                        <img src={chiqish} alt="Kurs" />
                        <p>Chiqish</p>
                      </a>
                    </li>
                  </ul>
                </>
              ) : null}
            </div>
          ) : null}
        </header>
      </div>
      {prof || mediaModal ? (
        <span
          onClick={() => {
            setProf(false);
            setMediaModal(false);
          }}
          className="header-modal-fix"
        ></span>
      ) : null}
    </>
  );
}

export default Header;

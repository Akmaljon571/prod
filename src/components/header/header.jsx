import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import { nameOneLetter } from '../../func/name';
import { message } from 'antd';
import { hLang } from './header.lang';
import logo from '../../img/LinCor.svg';
import vector from '../../img/header-vector.svg';
import sVector from '../../img/profile-vector.svg';
import book from '../../img/book-open.svg';
import tolov from '../../img/credit-card.svg';
import profil from '../../img/user.svg';
import aloqa from '../../img/phone-call.svg';
import chiqish from '../../img/log-out.svg';
import hum from '../../img/hum.svg';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Notification from './notification';
import './header.scss';
import './media.scss';

function Header() {
  const { token, active, setActive, l, setLang } = useContext(State);
  const [prof, setProf] = useState(false);
  const [mediaModal, setMediaModal] = useState(false);
  const [list_none, setListNone] = useState(false);
  const [me, setMe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    message.destroy();
    if (token) {
      fetch(api + '/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((re) => re.json())
        .then((data) => {
          setMe(data.me);
        });
    }
  }, [token]);

  return (
    <div className="header-f">
      <div className="header-fat">
        <div className="header-fix">
          <Notification setActive={setActive} />
          <header className="header">
            <nav className="nav">
              <Link to={'/'}>
                <img className="logo" src={logo} alt="Company logo" />
              </Link>
              <ul>
                <li>
                  <Link to={'/courses'}>{hLang[l].kurs}</Link>
                </li>
                <li>
                  <Link to={'/about/madaniyat'}>{hLang[l].madaniyat}</Link>
                </li>
                <li>
                  <Link to={'/about/oqish'}>{hLang[l].oqish}</Link>
                </li>
                <li>
                  <Link to={'/payment'}>{hLang[l].tolov}</Link>
                </li>
                <li>
                  <Link to={'/aloqa'}>{hLang[l].aloqa}</Link>
                </li>
              </ul>
            </nav>
            <div style={{ width: '30%' }} className="nav header-select">
              <select onChange={(e) => setLang(e.target.value)}>
                <option value="uz">UZB</option>
                <option value="kr">KOR</option>
              </select>
              <Link
                to={'/news'}
                style={{
                  backgroundColor: '#F2F2F2',
                  padding: '8px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {active ? (
                  <span
                    style={{
                      display: 'block',
                      width: '7px',
                      height: '7px',
                      position: 'absolute',
                      backgroundColor: 'red',
                      top: '8px',
                      borderRadius: '50%',
                      right: '11px',
                    }}
                  ></span>
                ) : null}
                <NotificationsNoneIcon style={{ fill: '#aaa' }} />
              </Link>
              {!token ? (
                <Button
                  style={{ borderRadius: '20px', textTransform: 'capitalize' }}
                  variant="contained"
                  className="btn"
                  onClick={() => navigate('/login')}
                >
                  {hLang[l].kirish}
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
                        <p>{hLang[l].kurslarim}</p>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/payment'}>
                        <img src={tolov} alt="Kurs" />
                        <p>{hLang[l].tolov}</p>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/setting'}>
                        <img src={profil} alt="Kurs" />
                        <p>{hLang[l].profile}</p>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/aloqa'}>
                        <img src={aloqa} alt="Kurs" />
                        <p>{hLang[l].aloqa}</p>
                      </Link>
                    </li>
                    <li>
                      <a onClick={() => localStorage.clear()} href={'/'}>
                        <img src={chiqish} alt="Kurs" />
                        <p>{hLang[l].chiqish}</p>
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
                    {hLang[l].kirish}
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
                    <Link to={'/courses'}>{hLang[l].kurs}</Link>
                  </li>
                  {list_none ? null : (
                    <>
                      <li>
                        <Link to={'/about/madaniyat'}>
                          {hLang[l].madaniyat}
                        </Link>
                      </li>
                      <li>
                        <Link to={'/about/oqish'}>{hLang[l].oqish}</Link>
                      </li>
                      <li>
                        <Link to={'/payment'}>{hLang[l].tolov}</Link>
                      </li>
                      <li>
                        <Link to={'/aloqa'}>{hLang[l].aloqa}</Link>
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
                          <p>{hLang[l].kurslarim}</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={'/payment'}>
                          <img src={tolov} alt="Kurs" />
                          <p>{hLang[l].tolov}</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={'/setting'}>
                          <img src={profil} alt="Kurs" />
                          <p>{hLang[l].profile}</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={'/aloqa'}>
                          <img src={aloqa} alt="Kurs" />
                          <p>{hLang[l].aloqa}</p>
                        </Link>
                      </li>
                      <li className="chiqish">
                        <a onClick={() => localStorage.clear()} href={'/'}>
                          <img src={chiqish} alt="Kurs" />
                          <p>{hLang[l].chiqish}</p>
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
      </div>
    </div>
  );
}

export default Header;

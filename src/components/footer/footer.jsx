import logo from '../../img/LinCor.svg';
import tell from '../../img/footer-tell.svg';
import mail from '../../img/footer-mail.svg';
import location from '../../img/footer-location.svg';
import icon from '../../img/footer-icon.svg';
import { Link } from 'react-router-dom';
import { State, api, tg } from '../../context';
import { useContext, useEffect, useState } from 'react';
import { footerLang } from './footer.lang';
import './footer.scss';

function Footer() {
  const { l } = useContext(State);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(api + '/public/course')
      .then((re) => re.json())
      .then((data) => setList(data.courses));
  }, []);

  return (
    <footer style={{ marginTop: '100px' }} className="footer">
      <div className="top">
        <div className="one">
          <Link to={'/'}>
            <img className="logo" src={logo} alt="Company Logo" />
          </Link>
          <p>{footerLang[l].text}</p>
          <span>{footerLang[l].sana}</span>
        </div>
        <div className="two">
          <h4>{footerLang[l].kurs}</h4>
          <ul>
            {list.length
              ? list.map((e) => <li key={e._id}>{e.title}</li>)
              : null}
          </ul>
        </div>
        <div className="three">
          <h4>{footerLang[l].maslahat}</h4>
          <ul>
            <li>
              <Link to={'/about/madaniyat'}>{footerLang[l].t1}</Link>
            </li>
            <li>
              <Link to={'/about/oqish'}>{footerLang[l].t2}</Link>
            </li>
          </ul>
        </div>
        <div className="four">
          <h4>{footerLang[l].aloqa}</h4>
          <ul>
            <li>
              <a className="icon-fath" href="tel:+998990009901">
                <img src={tell} alt="Tel" />
                <span>+99899 000-99-01</span>
                <img
                  className="icon"
                  style={{ marginLeft: '12px' }}
                  src={icon}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                className="icon-fath"
                href="https://mail.google.com/mail/u/0/#inbox"
              >
                <img src={mail} alt="Email" />
                <span>E-mail: examplry@gmail.com</span>
                <img
                  className="icon"
                  style={{ marginLeft: '12px' }}
                  src={icon}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a className="icon-fath" href="/">
                <img src={location} alt="location" />
                <span>Afrosiyob ko’chasi 12-A</span>
                <img
                  className="icon"
                  style={{ marginLeft: '12px' }}
                  src={icon}
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <Link target="_blank" rel="noreferrer" to="https://facebook.com">
          Facebook
          <img src={icon} alt="Icon" />
        </Link>
        <Link target="_blank" rel="noreferrer" to="https://instagram.com">
          Instagram
          <img src={icon} alt="Icon" />
        </Link>
        <Link target="_blank" rel="noreferrer" to={tg}>
          Telegram
          <img src={icon} alt="Icon" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

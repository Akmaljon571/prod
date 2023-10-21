import { Link } from 'react-router-dom';
import logo from '../../img/LinCor.svg';
import tell from '../../img/footer-tell.svg';
import mail from '../../img/footer-mail.svg';
import location from '../../img/footer-location.svg';
import icon from '../../img/footer-icon.svg';
import './footer.scss';

function Footer() {
  return (
    <footer style={{ marginTop: '100px' }} className="footer">
      <div className="top">
        <div className="one">
          <Link to={'/'}>
            <img src={logo} alt="Company Logo" />
          </Link>
          <p>Barcha huquqlar himoyalangan </p>
          <span>2023-yil Oktabr</span>
        </div>
        <div className="two">
          <h4>Kurslar</h4>
          <ul>
            <li>Boshlang‘ich tushuncha</li>
            <li>Kores til asoslari</li>
            <li>Muloqotni rivijlantirish</li>
            <li>yuqoriroq daraja</li>
            <li>yuqori daraja</li>
          </ul>
        </div>
        <div className="three">
          <h4>Imtiyozlar</h4>
          <ul>
            <li>O’qish uchun</li>
            <li>Ishlash uchun</li>
            <li>Grandlar</li>
          </ul>
        </div>
        <div className="four">
          <h4>Bog’lanish</h4>
          <ul>
            <li>
              <a href="tel:+998990009901">
                <img src={tell} alt="Tel" />
                <span>+99899 000-99-01</span>
                <img style={{ marginLeft: '12px' }} src={icon} alt="" />
              </a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <img src={mail} alt="Email" />
                <span>E-mail: examplry@gmail.com</span>
              </a>
            </li>
            <li>
              <img src={location} alt="location" />
              <span>Afrosiyob ko’chasi 12-A</span>
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
        <Link target="_blank" rel="noreferrer" to="https://t.me/akmaljondev">
          Telegram
          <img src={icon} alt="Icon" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

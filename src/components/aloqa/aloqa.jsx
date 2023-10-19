import PhoneIcon from '@mui/icons-material/Phone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './aloqa.scss';

function Aloqa() {
  return (
    <div className="aloqa">
      <h2>Aloqa</h2>
      <p>Bizga murojaat qilmoqchimisiz</p>
      <ul>
        <li className="li active">
          <h4>Aloqa ma’lumoti</h4>
          <div className="aloqa-div">
            <PhoneIcon />
            <div>
              <p>Tel: +99899 000-99-01</p>
              <p>E-mail: examplry@gmail.com</p>
            </div>
          </div>
        </li>
        <li className="li">
          <h4>Manzil</h4>
          <div className="aloqa-div">
            <FmdGoodIcon />
            <p>2260 Lady Bug Drive, New York, NY 10011</p>
          </div>
        </li>
        <li className="li">
          <h4>Manzil</h4>
          <div className="aloqa-div">
            <AccessTimeIcon />
            <p>
              Monday - Friday <br />
              10:00 am - 7:30 pm
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Aloqa;

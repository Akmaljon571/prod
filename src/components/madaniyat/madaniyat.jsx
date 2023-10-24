import oyin from '../../img/madaniyat.svg';
import gerb from '../../img/korea.svg';
import next from '../../img/Vector 5.svg';
import tokyo1 from '../../img/tokyo1.png';
import tokyo2 from '../../img/tokyo2.png';
import tokyo3 from '../../img/tokyo3.png';
import { useNavigate } from 'react-router-dom';
import './madaniyat.scss';
import { useContext } from 'react';
import { State } from '../../context';
import { madaniyatLang } from './madaniyat.lang';

function Madaniyat() {
  const navigate = useNavigate();
  const { l } = useContext(State);

  return (
    <div className="madaniyat">
      <div className="text">
        <h2>
          {madaniyatLang[l].t1}
          <span>{madaniyatLang[l].t2}</span> {madaniyatLang[l].t3}
        </h2>
        <div className="btns">
          <div className="left">
            <img src={oyin} alt="oyinchoq" />
            <img src={gerb} alt="Korea Bayrogi" />
          </div>
          <div onClick={() => navigate('/about')} className="next">
            <img src={next} alt="Next" />
          </div>
        </div>
      </div>
      <div className="images">
        <img src={tokyo1} alt="Tokyo" />
        <img className="center" src={tokyo2} alt="Tokyo" />
        <img src={tokyo3} alt="Tokyo" />
      </div>
    </div>
  );
}

export default Madaniyat;

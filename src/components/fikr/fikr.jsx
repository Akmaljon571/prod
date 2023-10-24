import { useContext } from 'react';
import { State } from '../../context';
import { fikrLang } from './fikr.lang';
import img1 from '../../img/bohemian-man-with-his-arms-crossed_1368-3542.avif';
import img2 from '../../img/pretty-smiling-woman-cafe_624325-3285.jpg';
import img3 from '../../img/photo-1573496359142-b8d87734a5a2.avif';
import img4 from '../../img/confident-corporate-charm-handsome-young-african-american-businessman-standing-indoors-with-his-arms-folded_590464-31666.avif';
import Marquee from 'react-fast-marquee';
import './fikr.scss';

function Fikr() {
  const { l } = useContext(State);

  return (
    <div className="fikr">
      <h2>{fikrLang[l].title}</h2>
      <Marquee style={{ borderRadius: '12px' }} className={'bottom'}>
        <div
          className="item"
          style={{ backgroundColor: '#E6FCEB', width: '200px' }}
        >
          <div className="prof">
            <div className="img-fath">
              <img src={img1} alt="Image1" />
            </div>
            <div>
              <h3>{fikrLang[l].o1n}</h3>
              <span>{fikrLang[l].o1u}</span>
            </div>
          </div>
          <p className="text">{fikrLang[l].o1f}</p>
        </div>
        <div style={{ width: '500px' }} className="item">
          <div className="prof">
            <div className="img-fath">
              <img src={img2} alt="Image1" />
            </div>
            <div>
              <h3>{fikrLang[l].o2n}</h3>
              <span>{fikrLang[l].o2u}</span>
            </div>
          </div>
          <p className="text">{fikrLang[l].o2f}</p>
        </div>
        <div
          className="item"
          style={{ backgroundColor: '#E6FCEB', width: '200px' }}
        >
          <div className="prof">
            <div className="img-fath">
              <img src={img4} alt="Image1" />
            </div>
            <div>
              <h3>{fikrLang[l].o3n}</h3>
              <span>{fikrLang[l].o3u}</span>
            </div>
          </div>
          <p className="text">{fikrLang[l].o3f}</p>
        </div>
        <div className="item">
          <div className="prof">
            <div className="img-fath">
              <img src={img3} alt="Image1" />
            </div>
            <div>
              <h3>{fikrLang[l].o4n}</h3>
              <span>{fikrLang[l].o4u}</span>
            </div>
          </div>
          <p className="text">{fikrLang[l].o4f}</p>
        </div>
      </Marquee>
    </div>
  );
}

export default Fikr;

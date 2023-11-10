import book from '../../img/Frame 1948753492.svg';
import ok from '../../img/Frame 1948753493 (1).svg';
import next from '../../img/Frame 48096950.svg';
import group from '../../img/Union.png';
import { useContext } from 'react';
import { State } from '../../context';
import { comportLang } from './comport.lang';
import './comfort.scss';
import './comfort.media.scss';

function Comfort() {
  const { l } = useContext(State);

  return (
    <div className="comfort">
      <div className="left">
        <h2>
          {comportLang[l].t1} <br />
          {comportLang[l].t2}
          <span>{comportLang[l].t3}</span> <br />
          {comportLang[l].t4}
        </h2>
        <div className="btns">
          <img className="book" src={book} alt="Book" />
          <img className="ok" src={ok} alt="ok" />
          <img className="next" src={next} alt="next" />
        </div>
      </div>
      <img className="girl" src={group} alt="" />
    </div>
  );
}

export default Comfort;

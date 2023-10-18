import book from '../../img/Frame 1948753492.svg';
import ok from '../../img/Frame 1948753493 (1).svg';
import next from '../../img/Frame 48096950.svg';
import group from '../../img/Union.png';
import './comfort.scss';

function Comfort() {
  return (
    <div className="comfort">
      <div className="left">
        <h2>
          O’ziga hos <br /> o’quv <span>Darsliklarmiz</span> va qulaylik
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

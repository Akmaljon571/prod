import { useContext } from 'react';
import { State } from '../../context';
import { promiseLang } from './promise.lang';
import img1 from '../../img/miya.svg';
import img2 from '../../img/yetuk.svg';
import img3 from '../../img/qol.svg';
import './promise.scss';

function Promise() {
  const { l } = useContext(State);

  return (
    <div className="promise">
      <h2>{promiseLang[l].title}</h2>
      <hr />
      <ul>
        <li>
          <img src={img1} alt="Img1" />
          <h3>{promiseLang[l].i1S}</h3>
          <p>{promiseLang[l].i1T}</p>
        </li>
        <li>
          <img src={img2} alt="Img1" />
          <h3>{promiseLang[l].i2S}</h3>
          <p>{promiseLang[l].i2T}</p>
        </li>
        <li>
          <img src={img3} alt="Img1" />
          <h3>{promiseLang[l].i3S}</h3>
          <p>{promiseLang[l].i3T}</p>
        </li>
      </ul>
    </div>
  );
}

export default Promise;

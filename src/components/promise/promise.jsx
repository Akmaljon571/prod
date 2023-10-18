import img1 from '../../img/miya.svg';
import img2 from '../../img/yetuk.svg';
import img3 from '../../img/qol.svg';
import './promise.scss';

function Promise() {
  return (
    <div className="promise">
      <h2>Kursdan nimalar kutilmoqda</h2>
      <hr />
      <ul>
        <li>
          <img src={img1} alt="Img1" />
          <h3>Tez til o’rganish</h3>
          <p>
            Psixoterapevt, psixiatr, nevrolog, psixolog hamda ruhiy tarbiya
            mutaxasislari
          </p>
        </li>
        <li>
          <img src={img2} alt="Img1" />
          <h3>Yetuk mutahasis</h3>
          <p>
            Psixoterapevt, psixiatr, nevrolog, psixolog hamda ruhiy tarbiya
            mutaxasislari
          </p>
        </li>
        <li>
          <img src={img3} alt="Img1" />
          <h3>Koreada ish kutmoqda</h3>
          <p>
            Psixoterapevt, psixiatr, nevrolog, psixolog hamda ruhiy tarbiya
            mutaxasislari
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Promise;

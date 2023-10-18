import img1 from '../../img/bohemian-man-with-his-arms-crossed_1368-3542.avif';
import img2 from '../../img/pretty-smiling-woman-cafe_624325-3285.jpg';
import img3 from '../../img/photo-1573496359142-b8d87734a5a2.avif';
import img4 from '../../img/confident-corporate-charm-handsome-young-african-american-businessman-standing-indoors-with-his-arms-folded_590464-31666.avif';
import Marquee from "react-fast-marquee";
import './fikr.scss';

function Fikr() {

  return (
    <div className="fikr">
      <h2>O’quvchilarimiz fikri</h2>
      <Marquee className={'bottom'}>
        <div className='item' style={{backgroundColor: "#E6FCEB"}}>
          <div className="prof">
            <div className="img-fath">
              <img src={img1} alt="Image1" />
            </div>
            <div>
              <h3>Dev</h3>
              <span>developer_999</span>
            </div>
          </div>
          <p className="text">
            Tajribali mutaxassis bilan Islom an’analariga asoslangan psixologik
            ilmlarga ega bo‘ling! shoshiling!
          </p>
        </div>
        <div className='item'>
          <div className="prof">
            <div className="img-fath">
              <img src={img2} alt="Image1" />
            </div>
            <div>
              <h3>Nigora</h3>
              <span>nigora_2003</span>
            </div>
          </div>
          <p className="text">
            kurs ruhiy salomatlik mutaxassislari psixoterapevt, psixiatr,
            nevrolog, psixolog) hamda ruhiy tarbiya mutaxasislari islomshunos,
            dinshunos, imom, otinoyi) uchun mo‘ljallangan. Bakalavriat,
            magistratura
          </p>
        </div>
        <div className='item' style={{backgroundColor: "#E6FCEB"}}>
          <div className="prof">
            <div className="img-fath">
              <img src={img4} alt="Image1" />
            </div>
            <div>
              <h3>Akmal</h3>
              <span>akmaljondev</span>
            </div>
          </div>
          <p className="text">
            Tajribali mutaxassis bilan Islom an’analariga asoslangan psixologik
            ilmlarga ega bo‘ling! shoshiling!
          </p>
        </div>
        <div className='item'>
          <div className="prof">
            <div className="img-fath">
              <img src={img3} alt="Image1" />
            </div>
            <div>
              <h3>Bonu</h3>
              <span>Bonuchka_cha</span>
            </div>
          </div>
          <p className="text">
            kurs ruhiy salomatlik mutaxassislari psixoterapevt, psixiatr,
            nevrolog, psixolog) hamda ruhiy tarbiya mutaxasislari islomshunos,
            dinshunos, imom, otinoyi) uchun mo‘ljallanga
          </p>
        </div>
      </Marquee>
    </div>
  );
}

export default Fikr;

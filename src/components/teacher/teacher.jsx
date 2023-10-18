import img1 from '../../img/bohemian-man-with-his-arms-crossed_1368-3542.avif';
import img2 from '../../img/photo-1573496359142-b8d87734a5a2.avif';
import img4 from '../../img/confident-corporate-charm-handsome-young-african-american-businessman-standing-indoors-with-his-arms-folded_590464-31666.avif';
import img3 from '../../img/pretty-smiling-woman-cafe_624325-3285.jpg';
import absalute from '../../img/teacher.svg';
import './teacher.scss';
import { Button } from '@mui/material';

function Teacher() {
  return (
    <div className="teacher">
      <div className="left">
        <img src={img1} alt="Teacher" />
        <img src={img2} alt="Teacher" />
        <img src={img3} alt="Teacher" />
        <img src={img4} alt="Teacher" />
      </div>
      <img className="teacher-absalute" src={absalute} alt="Absalute" />
      <p className="teacher-absalute-text">린 코르</p>
      <div className="right">
        <h3>O’qituvchilarni sarasi bizda!</h3>
        <p>
          Bu topik darsliklari sizning yuqori daraja olishingizga yordam beradi
        </p>
        <Button variant="contained">Boshlash</Button>
      </div>
    </div>
  );
}

export default Teacher;

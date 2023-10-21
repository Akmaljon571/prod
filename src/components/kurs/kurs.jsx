import { useContext, useEffect, useState } from 'react';
import { api } from '../../context';
import { State } from '../../context';
import kurs1 from '../../img/kurs1.svg';
import kurs2 from '../../img/kurs2.svg';
import kurs3 from '../../img/kurs3.svg';
import summa from '../../func/summa';
import { Button } from '@mui/material';
import vector from '../../img/Vector 5.svg';
import vector6 from '../../img/Vector 6.svg';
import { useNavigate } from 'react-router-dom';
import './kurs.scss';

function Kurs() {
  const [courses, setCourses] = useState([]);
  const { token } = useContext(State);
  const navigate = useNavigate();

  useEffect(() => {
    const link = token ? '/admin/course' : '/public/course';
    fetch(api + link, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => setCourses(data?.courses?.slice(0, 3)));
  }, [token]);

  return (
    <div className="kurs">
      <h2>Kurslarimiz</h2>
      <p className="text">
        Bu darsliklari sizning yuqori daraja olishingizga yordam beradi
      </p>
      <ul>
        {courses?.map((e, i) => (
          <li className={i === 2 ? 't-none' : ''} key={i}>
            <img
              src={i === 0 ? kurs1 : i === 1 ? kurs2 : kurs3}
              alt="Kurs Rasmi"
            />
            <h4>{e.title}</h4>
            <p>{summa(e.price)}so'm</p>
            <span>{e?.videos?.length} ta dars</span>
            <Button
              onClick={() => navigate(`/course/${e._id}`)}
              variant="contained"
            >
              Boshladik
              <img src={vector} alt="Vector" />
            </Button>
          </li>
        ))}
      </ul>
      <div onClick={() => navigate('/courses')} className="bottom">
        Barcha kurslar
        <img src={vector6} alt="Vector" />
      </div>
    </div>
  );
}

export default Kurs;

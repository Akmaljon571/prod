import { useContext, useEffect, useState } from 'react';
import { api } from '../../context';
import { State } from '../../context';
import gif from '../../img/d9f21515b1e38d83e94fdbce88f623b6 (1).gif';
import summa from '../../func/summa';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { onLoad } from '../../func/onload';
import './courses.scss';

function Courses() {
  const [courses, setCourses] = useState([]);
  const { token } = useContext(State);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(api + '/admin/course', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => setCourses(data.courses));
  }, [token]);

  return (
    <div className="courses">
      <h2>Kurslar</h2>
      <p>Bu darsliklari sizning yuqori daraja olishingizga yordam beradi</p>

      <ul>
        {courses?.length
          ? courses.map((e) => (
              <li onClick={() => navigate(`/courses/${e._id}`)} key={e._id}>
                <img
                  onLoad={(target) => onLoad(target, e.image, token)}
                  src={gif}
                  alt="Loading"
                />
                <div className="bottom">
                  <h3>{e.title}</h3>
                  <p>
                    {e.description}u darsliklari sizning yuqori daraja
                    olishingizga yordam beradi
                  </p>
                  <span>{e.videos?.length} Video + Workbook</span>
                  <div>{summa(e.price)}so'm</div>
                  <Button variant="contained">
                    {e?.take ? "Ko'rish" : 'Sotib Olish'}
                  </Button>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Courses;

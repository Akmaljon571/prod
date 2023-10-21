import { useContext, useEffect, useState } from 'react';
import { api } from '../../context';
import { State } from '../../context';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { src } from '../../func/src';
import summa from '../../func/summa';
import './courses.scss';

function Courses() {
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
      .then((data) => setCourses(data.courses));
  }, [token]);

  return (
    <div className="courses">
      <h2>Kurslar</h2>
      <p>Bu darsliklari sizning yuqori daraja olishingizga yordam beradi</p>

      <ul>
        {courses?.length
          ? courses.map((e) => (
              <li key={e._id}>
                <img src={src(token, e?.image)} alt="Loading" />
                <div className="bottom">
                  <h3>{e.title}</h3>
                  <p>
                    {e.description}u darsliklari sizning yuqori daraja
                    olishingizga yordam beradi
                  </p>
                  <span>{e.videos?.length} Video + Workbook</span>
                  <div>{summa(e.price)}so'm</div>
                  <Button
                    onClick={() => navigate(`/courses/${e._id}`)}
                    variant="contained"
                  >
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

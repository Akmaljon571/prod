import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { src } from '../../func/src';
import summa from '../../func/summa';

function ProfileList() {
  const [nav, setNav] = useState(1);
  const [course, setCourse] = useState([]);
  const [oldCourse, setOldCourse] = useState([]);
  const { token } = useContext(State);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(api + '/admin/course', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => setCourse(data.courses));
    fetch(api + '/admin/course', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => setOldCourse(data.courses));
  }, [setCourse, token]);

  return (
    <div className="profile-list">
      <div className="nav">
        <div onClick={() => setNav(1)} className={nav === 1 ? 'active' : ''}>
          Sotib olingan kurslar
        </div>
        <div onClick={() => setNav(2)} className={nav === 2 ? 'active' : ''}>
          Avval xarid qilingan
        </div>
      </div>
      {nav === 1 ? (
        <ul>
          {course?.length
            ? course.map((e, i) => (
                <li key={i}>
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
                      Davom etish
                    </Button>
                  </div>
                </li>
              ))
            : null}
        </ul>
      ) : (
        <ul>
          {oldCourse?.length
            ? oldCourse.map((e, i) => (
                <li key={i}>
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
                      Davom etish
                    </Button>
                  </div>
                </li>
              ))
            : null}
          {oldCourse?.length
            ? oldCourse.map((e, i) => (
                <li key={i}>
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
                      Davom etish
                    </Button>
                  </div>
                </li>
              ))
            : null}
        </ul>
      )}
    </div>
  );
}

export default ProfileList;

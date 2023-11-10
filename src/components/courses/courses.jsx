import { useContext, useEffect, useState } from 'react';
import { api } from '../../context';
import { State } from '../../context';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { src } from '../../func/src';
import { coursesLang } from './courses.lang';
import summa from '../../func/summa';
import './courses.scss';

function Courses() {
  const [courses, setCourses] = useState([]);
  const { token, l } = useContext(State);
  const navigate = useNavigate();

  useEffect(() => {
    const link = token ? '/customer/course' : '/public/course';
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
      <h2>{coursesLang[l].title}</h2>
      <p>{coursesLang[l].text}</p>
      <ul>
        {courses?.length
          ? courses.map((e) => (
              <li key={e._id}>
                <img src={src(token, e?.image)} alt="Loading" />
                <div className="bottom">
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                  <span>
                    {e.video_count} {coursesLang[l].vd}
                  </span>
                  <div>
                    {summa(e.price)}
                    {coursesLang[l].som}
                  </div>
                  <Button
                    onClick={() => navigate(`/courses/${e._id}`)}
                    variant="contained"
                  >
                    {e?.take ? coursesLang[l].korish : coursesLang[l].ol}
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

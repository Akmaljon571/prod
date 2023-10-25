import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { src } from '../../func/src';
import summa from '../../func/summa';
import { profileLang } from './profile.lang';

function ProfileList() {
  const [nav, setNav] = useState(1);
  const [course, setCourse] = useState([]);
  const [oldCourse, setOldCourse] = useState([]);
  const { token, l } = useContext(State);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(api + '/customer/course?is_taked=true', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => setCourse(data.courses));
    fetch(api + '/customer/course', {
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
          {profileLang[l].active}
        </div>
        <div onClick={() => setNav(2)} className={nav === 2 ? 'active' : ''}>
          {profileLang[l].old}
        </div>
        <div onClick={() => setNav(3)} className={nav === 3 ? 'active' : ''}>
          {profileLang[l].s}
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
                    <p>{e.description}</p>
                    <span>
                      {e.video_count} {profileLang[l].vd}
                    </span>
                    <div>
                      {summa(e.price)}
                      {profileLang[l].som}
                    </div>
                    <Button
                      onClick={() => navigate(`/courses/${e._id}`)}
                      variant="contained"
                    >
                      {profileLang[l].davom}
                    </Button>
                  </div>
                </li>
              ))
            : null}
        </ul>
      ) : nav === 2 ? (
        <ul>
          {oldCourse?.length
            ? oldCourse.map((e, i) => (
                <li key={i}>
                  <img src={src(token, e?.image)} alt="Loading" />
                  <div className="bottom">
                    <h3>{e.title}</h3>
                    <p>{e.description}</p>
                    <span>
                      {e.video_count} {profileLang[l].vd}
                    </span>
                    <div>
                      {summa(e.price)}
                      {profileLang[l].som}
                    </div>
                    <Button
                      onClick={() => navigate(`/courses/${e._id}`)}
                      variant="contained"
                    >
                      {profileLang[l].davom}
                    </Button>
                  </div>
                </li>
              ))
            : null}
        </ul>
      ) : (
        <>Serfitikat</>
      )}
    </div>
  );
}

export default ProfileList;

import { useEffect, useState } from 'react';
import { api } from '../../context';
import './kurs.scss';

function Kurs() {
  // const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(api + '/admin/course')
      .then((re) => re.json())
      .then((data) => console.log(data));
  }, []);

  return <div className="kurs">de</div>;
}

export default Kurs;

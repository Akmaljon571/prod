import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';

function Test() {
  const data = JSON.parse(localStorage.getItem('test') || null);
  const { token } = useContext(State);
  const [active, setActive] = useState(data?.course_id ? true : false);
  const [test, setTest] = useState([]);

  useEffect(() => {
    if (data?.course_id && token) {
      fetch(api + `/customer/course/${data?.course_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((re) => re.json())
        .then((data) => setTest(data.tests));
    }
  }, [data, token]);

  return (
    <div className="test">{active ? <div className="modal"></div> : null}</div>
  );
}

export default Test;

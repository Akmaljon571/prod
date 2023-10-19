import { useParams } from 'react-router-dom';
import VideoPlayer from './videoPlayer';
import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import summa from '../../func/summa';

function Dars() {
  const { id } = useParams();
  const { token } = useContext(State);
  const [course, setCourse] = useState({});
  const [buy, setBuy] = useState(false);
  // const [findVideo, setFindVideo] = useState('');
  // const [videoId, setVideoId] = useState('');

  useEffect(() => {
    fetch(api + `/admin/course/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => {
        if (data.ok) {
          setCourse(data.course);

          fetch(api + `/customer/course/${data?.course[3]}`)
            .then((re) => re.json())
            .then((data) => {
              if (data?.ok) {
                setBuy(true);
              } else {
                setBuy(false);
              }
            })
            .catch(() => setBuy(false));
        }
      });
  }, [id, token]);

  return (
    <div className="dars">
      <VideoPlayer title={course?.title} />
      <div className="top">
        <p className="text">{course?.description}</p>
        {buy ? null : (
          <div className="buy">
            <h2>{course?.title}</h2>
            <div>
              <span>{course?.videos?.length} Video + Workbook</span>
              <p>{summa(course?.price)} so'm</p>
              <small>6 oy uchun</small>{' '}
            </div>
            <a href="https://t.me/akmaljondev">Sotib olish</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dars;

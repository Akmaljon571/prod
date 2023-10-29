import play from '../../img/video-player.svg';
import lock from '../../img/lock.svg';
import PauseIcon from '@mui/icons-material/Pause';
import { message } from 'antd';
import { State, api } from '../../context';
import { useContext, useEffect, useState } from 'react';
import { videoLang } from './video.lang';
import { Button } from '@mui/material';

function List({
  videos,
  active,
  find,
  setFindVideo,
  course,
  allWatch,
  setCourse,
}) {
  const { token, l, setOpenTest } = useContext(State);
  const [count, setCount] = useState(0);
  const [test, setTest] = useState('');

  useEffect(() => {
    const url = token
      ? `/customer/course/${course}`
      : `/public/course/${course}`;
    fetch(api + url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => {
        if (data?.ok) {
          setTest(data.course?.test_id);
          setCourse(data.course);
        }
      });
  }, [token, setCourse, count, course]);

  const findVideo = (id) => {
    message.loading("So'rov jo'natildi");
    const url = token
      ? `/customer/course/${course}/video/${id}`
      : `/public/course/${course}/video/${id}`;
    fetch(api + url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => {
        if (data.ok) {
          setCount(count + 1);
          setFindVideo(data.video);
        }
      });
  };

  const startTest = () => {
    localStorage.setItem(
      'test',
      JSON.stringify({
        course_id: course,
        minut: '39:59',
        data: [],
        test_id: test,
      }),
    );
    setOpenTest(true);
  };

  return (
    <div className="video_list">
      <div className="video_list-top">
        <p>{videoLang[l].all}</p>
        <span>
          {videos?.length} {videoLang[l].ta}
        </span>
      </div>
      <ul className="list">
        {videos?.length
          ? videos.map((e, i) => (
              <li key={e._id}>
                <div className="item-left">
                  {active || i < 2 ? (
                    find === e._id ? (
                      <div className="pause">
                        <PauseIcon />
                      </div>
                    ) : (
                      <img
                        onClick={() => findVideo(e._id)}
                        className="play"
                        src={play}
                        alt="Video play"
                      />
                    )
                  ) : (
                    <div
                      onClick={() => message.error('Sotib olinmagan')}
                      className="lock"
                    >
                      <img src={lock} alt="Video block" />
                    </div>
                  )}
                  <h4>{e.title}</h4>
                </div>
                <div className="item-right">
                  {allWatch?.includes(e._id) ? null : <span></span>}
                  <p>
                    {e.sequence} {videoLang[l].dars}
                  </p>
                </div>
              </li>
            ))
          : null}
      </ul>
      {videos?.length === allWatch?.length && test ? (
        <Button onClick={startTest} variant={'contained'}>
          Test Topshirish
        </Button>
      ) : null}
    </div>
  );
}

export default List;

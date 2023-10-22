import { useParams } from 'react-router-dom';
import VideoPlayer from './videoPlayer';
import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import summa from '../../func/summa';
import './video.scss';
import Description from './description';
import List from './list';
import Workbook from './workbook';

function Video() {
  const { id } = useParams();
  const { token } = useContext(State);
  const [course, setCourse] = useState({});
  const [videos, setVideos] = useState([]);
  const [findVideo, setFindVideo] = useState({});

  useEffect(() => {
    const url = token ? `/customer/course/${id}` : `/public/course/${id}`;
    fetch(api + url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => {
        if (data?.ok) {
          setCourse(data.course);
        }
      });
    fetch(api + url + '/video', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((re) => re.json())
      .then((data) => {
        if (data?.ok) {
          setVideos(data.videos?.sort((a, b) => a.sequence - b.sequence));
          setFindVideo(data.videos[0]);
        }
      });
  }, [id, token]);

  return (
    <div className="dars">
      <VideoPlayer title={course?.title} videoSrc={findVideo?.file_id} />
      <div className="top">
        <p className="text">{course?.description}</p>
        {course?.take ? null : (
          <div className="buy">
            <h2>{course?.title}</h2>
            <div>
              <span>{course?.videos?.length} Video + Workbook</span>
              <p>{summa(course?.price || 0)} so'm</p>
              <small>6 oy uchun</small>{' '}
            </div>
            <a href="https://t.me/akmaljondev">Sotib olish</a>
          </div>
        )}
      </div>
      <div className="bottom">
        <Description description={findVideo?.description} />
        <List
          videos={videos}
          course={id}
          setFindVideo={setFindVideo}
          active={course?.take ? true : false}
          find={findVideo?._id}
        />
      </div>
      <Workbook course={course} />
    </div>
  );
}

export default Video;

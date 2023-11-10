import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import { videoLang } from './video.lang';
import VideoPlayer from './video-player';
import summa from '../../func/summa';
import Description from './description';
import List from './list';
import Workbook from './workbook';
import './video.scss';

function Video() {
  const { id } = useParams();
  const { token, l } = useContext(State);
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
          fetch(api + url + '/video/' + data.course?.take?.current_video, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((re) => re.json())
            .then((data) => {
              if (data?.ok) {
                setFindVideo(data.video);
              }
            });
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
      <VideoPlayer
        seq={findVideo.sequence}
        title={course?.title}
        videoSrc={findVideo?.file_id}
      />
      <div className="top">
        <p className="text">{course?.description}</p>
        {course?.take ? null : (
          <div className="buy">
            <h2>{course?.title}</h2>
            <div>
              <span>
                {course?.videos?.length} {videoLang[l].vd}
              </span>
              <p>
                {summa(course?.price || 0)} {videoLang[l].som}
              </p>
              <small>{videoLang[l].muddat}</small>{' '}
            </div>
            <Link to={'/payment'}>{videoLang[l].ol}</Link>
          </div>
        )}
      </div>
      <div className="bottom">
        <Description description={findVideo?.description} />
        <List
          setCourse={setCourse}
          videos={videos}
          course={id}
          allWatch={course.take?.watched_videos}
          setFindVideo={setFindVideo}
          active={course?.take ? true : false}
          find={findVideo?._id}
        />
      </div>
      <Workbook take={course?.take} course={course} />
    </div>
  );
}

export default Video;

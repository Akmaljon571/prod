import { useContext, useRef } from 'react';
import poster from '../../img/photo_2023-10-17_02-48-14.jpg';
import { State } from '../../context';
import { source } from '../../func/source';
import { videoLang } from './video.lang';

function VideoPlayer({ title, videoSrc, seq }) {
  const videoRef = useRef(null);
  const { token, l } = useContext(State);

  return (
    <div className="video_player">
      <h5>{title}</h5>
      <div className="video-container">
        <video
          ref={videoRef}
          controlsList="nodownload"
          controls
          className="custom-video"
          style={{ width: '100%', height: '560px' }}
          poster={poster}
          src={source(token, videoSrc)}
        ></video>
        <p className="video-count">
          <b>{seq}</b>
          <span>{videoLang[l].dars}</span>
        </p>
      </div>
    </div>
  );
}

export default VideoPlayer;

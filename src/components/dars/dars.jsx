import { useEffect, useRef, useState } from 'react';
import video from '../../video/1772591765.mp4';
import poster from '../../img/photo_2023-10-17_02-48-14.jpg';
import './dars.scss';
import play from '../../img/video-player.svg';
import { Button } from '@mui/material';

function Dars() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(videoRef.current.duration);
    setIsLoading(false);
  };

  useEffect(() => {
    videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    videoRef.current.addEventListener('loadeddata', handleLoadedData);

    return () => {
      videoRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
      videoRef.current?.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <div className="dars">
      <h5>boshlangich daraja </h5>
      <div className="video-container">
        <video
          ref={videoRef}
          onClick={togglePlayPause}
          className="custom-video"
          style={{ width: '100%', height: '560px' }}
          poster={poster}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="video-count">
          <b>01</b>
          <span>Dars</span>
        </p>
        <div className="video-controls">
          {!isPlaying ? (
            <img
              onClick={togglePlayPause}
              className="control-button"
              src={play}
              alt="Play Icon"
            />
          ) : null}
        </div>
        {isLoading ? (
          <div className="loading-indicator">Loading...</div>
        ) : (
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            className="time-slider"
            onChange={(e) => (videoRef.current.currentTime = e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

export default Dars;

import video from '../video/1772591765.mp4';
import poster from '../img/photo_2023-10-17_02-48-14.jpg';

function HomeVideo() {
  return (
    <>
      <video
        id="video-player"
        loop
        className="homeVideo"
        autoPlay
        muted
        poster={poster}
        height={604}
        style={{
          width: '100%',
          borderRadius: '20px',
          objectFit: 'fill',
        }}
        preload="metadata"
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}

export default HomeVideo;

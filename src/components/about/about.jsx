import madaniyatV1 from '../../video/1772591765.mp4';
import oqishV2 from '../../video/1772591765.mp4';
import madaniyatP1 from '../../img/photo_2023-10-17_02-48-14.jpg';
import oqishP2 from '../../img/photo_2023-10-17_02-48-14.jpg';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { State } from '../../context';
import { aboutLang } from './about.lang';
import './about.scss';

function About() {
  const { id } = useParams();
  const { l } = useContext(State);
  const page = id === 'madaniyat';

  return (
    <div className="about">
      <video
        controls
        className="about-video"
        style={{ width: '100%', height: '560px' }}
        poster={page ? madaniyatP1 : oqishP2}
        src={page ? madaniyatV1 : oqishV2}
      ></video>
      <h2>{page ? aboutLang[l].s1 : aboutLang[l].s2}</h2>
      <div className="about-text">
        {page ? aboutLang[l].t1 : aboutLang[l].t2}
      </div>
    </div>
  );
}

export default About;

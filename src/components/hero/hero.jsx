import './hero.scss';
import { Button } from '@mui/material';
import player from '../../img/Vector 6.svg';
import girl from '../../img/hero-girl.png';
import img1 from '../../img/hero1.png';
import img2 from '../../img/hero2.png';
import img3 from '../../img/hero3.png';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="left">
        <h1>
          Online til o‘rganing Koreada <span>O’qish</span> Kutmoqda
        </h1>
        <Button onClick={() => navigate('/courses')} variant="text">birinchi dars</Button>
        <Button onClick={() => navigate('/courses')} className="img" variant="contained">
          <img src={player} alt="Video player" />
        </Button>
      </div>
      <div className="image">
        <div className="image-fath">
          <img className="img1" src={img1} alt="Rasm1" />
          <img className="img2" src={img2} alt="Rasm2" />
          <img className="img3" src={img3} alt="Rasm3" />
          <img className="girl" src={girl} alt="Hero Girl" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

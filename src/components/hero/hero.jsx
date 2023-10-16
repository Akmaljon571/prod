import './hero.scss';
import { Button } from '@mui/material';
import player from '../../img/video-player.svg';
import girl from '../../img/hero-girl.png';

function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <h1>online Til o‘rgan Koreada o‘qi!</h1>
        <p>Bitta siteni o‘zida bilim oling testdan o‘ting koreaga boring!</p>
        <Button variant="text">
          birinchi dars
          <img src={player} alt="Video player" />
        </Button>
      </div>
      <img className="right" src={girl} alt="Hero Girl" />
    </div>
  );
}

export default Hero;

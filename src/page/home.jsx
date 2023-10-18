import {
  Comfort,
  Header,
  Hero,
  Kurs,
  Message,
  Promise,
  Teacher,
} from '../components';
import { HomeVideo, Line } from '../html';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Promise />
      <HomeVideo />
      <Kurs />
      <Comfort />
      <Teacher />
      <Line />
      <Message />
    </>
  );
}

export default Home;

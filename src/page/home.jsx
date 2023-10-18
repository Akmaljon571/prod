import {
  Comfort,
  Header,
  Hero,
  Kurs,
  Madaniyat,
  Message,
  Promise,
  Teacher,
} from '../components';
import { HomeVideo } from '../html';

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
      <Madaniyat />
      {/* <Message /> */}
    </>
  );
}

export default Home;

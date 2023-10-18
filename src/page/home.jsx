import {
  Comfort,
  Dropdown,
  Fikr,
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
      <Fikr />
      <Dropdown />
      <Message />
    </>
  );
}

export default Home;

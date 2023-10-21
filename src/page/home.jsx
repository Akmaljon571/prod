import {
  Comfort,
  Dropdown,
  Fikr,
  Footer,
  Header,
  Hero,
  Kurs,
  Madaniyat,
  Main,
  Message,
  Promise,
  Teacher,
} from '../components';
import { HomeVideo } from '../html';

function Home() {
  return (
    <>
      <Header />
      <Main>
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
      </Main>
      <Footer />
    </>
  );
}

export default Home;

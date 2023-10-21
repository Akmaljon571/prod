import { Error, Footer, Header, Main } from '../components';

function ErrorPage() {
  return (
    <>
      <Header />
      <Main>
        <Error />
      </Main>
      <Footer />
    </>
  );
}

export default ErrorPage;

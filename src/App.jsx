import './App.scss';
import { Container } from './components';
import Test from './components/test/test';
import Routers from './routes/routes';

function App() {
  return (
    <Container>
      <Test />
      <Routers />
    </Container>
  );
}

export default App;

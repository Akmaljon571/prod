import './App.scss';
import { Container } from './components';
import Routers from './routes/routes';
import Test from './components/test/test';

function App() {
  return (
    <Container>
      <Test />
      <Routers />
    </Container>
  );
}

export default App;

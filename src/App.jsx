import { Container } from './components';
import Routers from './routes/routes';
import Test from './components/test/test';
import './App.scss';

function App() {
  return (
    <Container>
      <Test />
      <Routers />
    </Container>
  );
}

export default App;

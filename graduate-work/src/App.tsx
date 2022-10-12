import './App.css';
import { RootRouter } from './router';
import { BrowserRouter } from 'react-router-dom';
import { Header} from './components/Header'
import { Main } from './pages/Main';

function App() {
  return (
      <BrowserRouter>
          <RootRouter/>
      </BrowserRouter> 
  );
}

export default App;

import './App.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Input } from './components/Input'
import { RegistrationForm} from './components/RegistrationForm'

function App() {
  return (
    <div>
      <Header/>
      <RegistrationForm/>
      {/* <Main/> */}
      {/* <Button type='primary' text={"Shop JUMJi"}/> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Primercomponente } from './components/Primercomponente';
import { SegundoComponente } from './components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Estos es un repaso de React</p>

        <Primercomponente />
        <hr/>

        <SegundoComponente />
      </header>
    </div>
  );
}

export default App;

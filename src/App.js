import logo from './logo.svg';
import './App.css';

// const url = "https://static.platzi.com/ui/assets/image/logotipo-platzie69328f33899695e31fa.png"

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {props.saludo}
        </p>
        <p>
          {props.children}
        </p>
        <p>
          {props.despedida}
        </p>
      </header>
    </div>
  );
}

export default App;

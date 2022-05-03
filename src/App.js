import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <div className='header'>
      <h1>Home</h1> <br></br>
      <h1>About</h1><br></br>
      <h1>Contact</h1>
      </div>
      
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
         React Deployment is changing!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
    </div>
  );
}

export default App;

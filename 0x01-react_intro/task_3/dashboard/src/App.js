import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={logo} alt='Logo for alx'></img>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        {/* email */}
        <label for='email'>Email</label>
        <input type='email' id='email'></input>

        {/* password */}
        <label for='password'>Password</label>
        <input type='password' id='password'></input>
        <button>Ok</button>
      </div>
      <div className = 'App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;

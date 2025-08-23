import logo from './alx_logo.jpg';
import './App.css';
import getFullYear from './utils';
import { getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      {/* app header */}
      <div className='App-header'>
        <img src={logo} alt='Alx logo' className='Alx-logo'></img>
        <h1>School dashboard</h1>
      </div>

      {/* app body */}
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        {/* email */}
        <label for='email'>email</label>
        <input type='email' placeholder='enter your email' id='email'></input>
        <br></br>
        {/* password */}
        <label for='password'>password</label>
        <input type='password' id='password'></input>

        <button>ok</button>
      </div>

      {/* app footer */}
      <div className='App-footer'>
        <p>Copyright {getFullYear} - {getFooterCopy}</p>
      </div>
    </div>
  );
}

export default App;

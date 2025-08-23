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
      </div>

      {/* app footer */}
      <div className='App-footer'>
        <p>Copyright {getFullYear} - {getFooterCopy}</p>
      </div>
    </div>
  );
}

export default App;

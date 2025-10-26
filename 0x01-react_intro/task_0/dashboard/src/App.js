import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={logo} alt='Logo for alx'></img>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <hr></hr>
      <div className = 'App-footer'>
        <p>Copyright 2020 - ALX</p>
      </div>
    </>
  );
}

export default App;

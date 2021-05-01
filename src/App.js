import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook'
import Google from './components/Google';

function App() {
  return (
    <div className="App">
      <h1>FaceBook Auth</h1>
      <Facebook/>
      <Google/>
    </div>
  );
}

export default App;

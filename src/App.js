import logo from './logo.svg';
import './App.css';
import Learn from './components/learn'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header className='header'/>
      <Learn/>
    </div>
  );
}

export default App;

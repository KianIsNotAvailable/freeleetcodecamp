import logo from './logo.svg';
import './App.css';
import Learn from './components/learn'
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Loops from './components/pages/loops'
import Workspace from './components/pages/workspace.tsx'

function App() {
  return (
    <div className="App">
      <Router>
      <Header className='header'/>
      <Routes>
        <Route path="/" element={<Learn/>} />
        <Route path="/loops" element={<Workspace/>} />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;

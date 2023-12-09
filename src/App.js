import logo from './logo.svg';
import './App.css';
import Learn from './components/learn'
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Workspace from './components/pages/workspace.tsx';
import Popup from './components/popup.tsx';

function App() {
 
  return (
    <div className="App">
      <Router>
      <Header className='header'/>
    <Popup><h1>hello</h1></Popup>
      <Routes>
        <Route path="/" element={<Learn/>} />
        <Route path="/loops" element={<Workspace/>} />
        <Route path="/introduction" element={<Workspace/>} />
        <Route path="/enumerate" element={<Workspace/>} />
        <Route path="/hashmap" element={<Workspace/>} />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;

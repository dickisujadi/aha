import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Tags } from './pages/Tags';

function App() {
  return (
    <div className="App flex flex-row">
      <Sidebar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tags' element={<Tags />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

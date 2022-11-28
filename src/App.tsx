import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Tags } from './pages/Tags';

function App() {
  return (
    <div className="App flex xs:flex-col w-screen">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

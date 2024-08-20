import React,{useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { About } from './components/About'
import ProjectList from './components/ProjectList';
import { useStars } from './hooks/useStars'
import { Resume } from './components/Resume';
import { FloatChat } from './components/FloatChat';

function App() {

  useStars(50)


  return (
    <Router>
      <div className="relative min-h-screen text-gray-200 overflow-auto">
        <div id="star-container" className="fixed inset-0 z-0 pointer-events-none "></div>
        <NavBar />
        <div className="relative z-10 mt-16"> 
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <FloatChat />
      </div>
    </Router>
  );
}

export default App

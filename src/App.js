import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllProjects from './components/AllProjects';
import ProjectDetailPDV from './components/ProjectDetailPDV';
import ProjectDetailCodes from './components/ProjectDetailCodes';
import ProjectDetailExpo from './components/ProjectDetailExpo';
import ProjectDetailBruno from './components/ProjectDetailBruno';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<AllProjects />} />
        <Route path="/proyectos/pdv" element={<ProjectDetailPDV />} />
        <Route path="/proyectos/codes" element={<ProjectDetailCodes />} />
        <Route path="/proyectos/expo" element={<ProjectDetailExpo />} />
        <Route path="/proyectos/bruno" element={<ProjectDetailBruno />} />
      </Routes>
    </div>
  );
}

export default App; 
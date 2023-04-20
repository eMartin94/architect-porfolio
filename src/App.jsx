import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/HomePage';
import About from './pages/about/AboutPage';
import Project from './pages/project/ProjectPage';
import Drawing from './pages/drawing/DrawingPage';
import Contact from './pages/contact/ContactPage';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('en');
  return (
    <>
      {/* <BrowserRouter> */}
      <div className='relative z-0'>
        <div className='fixed w-full'>
          <Header lang={language} setLanguage={setLanguage} />
        </div>
        <Routes>
          <Route path='/' element={<Home lang={language} />} />
          <Route path='/about' element={<About lang={language} />} />
          <Route path='/project' element={<Project lang={language} />} />
          <Route path='/drawing' element={<Drawing lang={language} />} />
          <Route path='/contact' element={<Contact lang={language} />} />
        </Routes>
        <Footer />
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

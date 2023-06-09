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
        <div className='w-full relative z-10'>
          <Header lang={language} setLanguage={setLanguage} />
        </div>
        <Routes>
          <Route path='/' element={<Home lang={language} />} />
          <Route path='/about' element={<About lang={language} />} />
          <Route path='/project' element={<Project lang={language} />} />
          <Route path='/drawing' element={<Drawing lang={language} />} />
          <Route path='/contact' element={<Contact lang={language} />} />
        </Routes>
        <hr />
        <div className='flex justify-center items-center h-full sm:h-20 w-full'>
          <Footer lang={language} />
        </div>
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

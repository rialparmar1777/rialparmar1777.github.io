import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const addActive = () => {
      cursor.classList.add('active');
    };

    const removeActive = () => {
      cursor.classList.remove('active');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', addActive);
    window.addEventListener('mouseup', removeActive);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', addActive);
      window.removeEventListener('mouseup', removeActive);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <div className="custom-cursor"></div>
    </div>
  );
}

export default App;

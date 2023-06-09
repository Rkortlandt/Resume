// import { useState } from 'react'
// import './App.css'
// import Hero from './Hero'
// import Nav from './Nav'

// function App() {
//   const darkMode = false;
//   // const [count, setCount] = useState(0)
//   const [scrollTo, setScrollTo] = useState<'AboutMe' | 'WorkExperience' | 'TechnologySkills' | 'References' | 'Certifications' | null>(null);

//   return (
//     <div className="App">
//       <Nav setScrollTo={setScrollTo}/>
//       <Hero setScrollTo={setScrollTo} scrollTo={scrollTo}/>
//       <div className='sticky bottom-0 right-0'>
//         <button className='btn-theme'><span className="material-symbols-outlined">{darkMode? "dark_mode" : "light_mode"}</span></button>
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css';
import Hero from './Hero';
import Nav from './Nav';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollTo, setScrollTo] = useState<'AboutMe' | 'WorkExperience' | 'TechnologySkills' | 'References' | 'Certifications' | null>(null);

  // Check if the user has a dark mode preference in localStorage
  if (localStorage.theme === 'dark') if (!darkMode) setDarkMode(true);
  if (localStorage.theme === 'light') if (darkMode) setDarkMode(false);
    
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    // Update the dark mode preference in localStorage if needed
    localStorage.theme = darkMode ? 'light' : 'dark';
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <div className='dark:bg-slate-800'>
        <Nav setScrollTo={setScrollTo} />
        <Hero setScrollTo={setScrollTo} scrollTo={scrollTo} />
        <div className='sticky bottom-0 right-0'>
          <button className='btn-theme' onClick={toggleDarkMode}>
            <span className="material-symbols-outlined">
              {!darkMode ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;


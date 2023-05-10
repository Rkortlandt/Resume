import { useState } from 'react'
import './App.css'
import Hero from './Hero'
import Nav from './Nav'

function App() {
  // const [count, setCount] = useState(0)
  const [scrollTo, setScrollTo] = useState<'AboutMe' | 'WorkExperience' | 'TechnologySkills' | 'References' | 'Certifications'>('AboutMe');

  return (
    <div className="App">
      <Nav setScrollTo={setScrollTo}/>
      <Hero scrollTo={scrollTo}/>
    </div>
  )
}

export default App

import './index.css';
export default function Nav(props: { setScrollTo: (scrollTo: 'AboutMe' | 'WorkExperience' | 'TechnologySkills' | 'References' | 'Certifications') => void }) {
  return (
    <div>
      <nav className="bg-slate-800 w-full h-19 flex-col flex lg:py-2 lg:px-1 lg:flex-row lg:fixed" id="nav">
          <button className="btn-nav-primary" onClick={() => props.setScrollTo('AboutMe')}>About Me</button>
          <button className="btn-nav-primary" onClick={() => props.setScrollTo('WorkExperience')}>Work Experience</button>
          <button className="btn-nav-primary" onClick={() => props.setScrollTo('TechnologySkills')}>Technology skills</button>
          <button className="btn-nav-primary" onClick={() => props.setScrollTo('References')}>References</button>
          <span className="grow"></span>
          <p className="text-white font-semibold border-r-slate-950 py-1.5 px-2 mx-2">Rowan J. Kortlandt</p>
          <p className="text-white font-light border-r-slate-950 py-1.5 px-2 mx-2">rkortlandt@gmail.com</p>
      </nav>
      </div>
  );
}
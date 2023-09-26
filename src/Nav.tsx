import { useEffect, useRef } from 'react';
import './index.css';
export default function Nav(props: { setScrollTo: (scrollTo: 'AboutMe' | 'WorkExperience' | 'TechnologySkills' | 'References' | 'Certifications' | null) => void }) {
  const clickedTooltipRef = useRef<HTMLParagraphElement | null>(null);
      const handleClick = () => {
        if (clickedTooltipRef.current) {
        clickedTooltipRef.current.classList.remove('opacity-0');
        navigator.clipboard.writeText('rkortlandt@gmail.com');
        setTimeout(() => {if (clickedTooltipRef.current) { clickedTooltipRef.current.classList.add('opacity-0')}}, 1000)
        }
      }
    


  return (
    <div>
      <nav className="dark:bg-slate-800 bg-slate-200 w-full h-19 flex-col flex lg:py-2 lg:px-1 lg:flex-row lg:fixed shadow-xl" id="nav">
          <button className="btn-nav-primary text-black" onClick={() => props.setScrollTo('AboutMe')}>About Me</button>
          <button className="btn-nav-primary text-black" onClick={() => props.setScrollTo('WorkExperience')}>Work Experience</button>
          <button className="btn-nav-primary text-black" onClick={() => props.setScrollTo('TechnologySkills')}>Technology skills</button>
          <button className="btn-nav-primary text-black" onClick={() => props.setScrollTo('References')}>References</button>
          <span className="grow"></span>
          <p className="dark:text-white font-semibold border-r-slate-950 py-1.5 px-2 mx-2">Rowan J. Kortlandt</p>
          <div className="overflow-visible h-10">
            <div className= 'flex justify-center bg-slate-500 rounded-md hover:bg-slate-700 transition-colors' onClick={handleClick}>
              <p className=" border-r-slate-950 py-1.5 px-2 ml-2">rkortlandt@gmail.com</p>
              <svg className=' my-auto mr-4' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>
            </div>
            <p className='relative bottom-0 bg-slate-500 w-fit py-1 px-3 mx-auto my-1 rounded-full transition-opacity opacity-0 text-xs' ref={clickedTooltipRef}>Copyed to clipboard!</p>
          </div>
      </nav>
      </div>
  );
}
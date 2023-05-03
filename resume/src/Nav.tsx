import './index.css';
export default function Nav() {
  return (
    <div>
      <nav className="bg-slate-800 w-full h-19 flex-col flex lg:py-2 lg:px-1 lg:flex-row lg:fixed" id="nav">
          <button className="btn-nav-primary" onClick={() => window.scroll(0, 0)}>About Me</button>
          <button className="btn-nav-primary" onClick={() => window.scroll(0, 350)}>Work Experience</button>
          <button className="btn-nav-primary" onClick={() => window.scroll(0, 900)}>Technology skills &amp; Related experience</button>
          <button className="btn-nav-primary">Education</button>
          <span className="grow"></span>
          <p className="text-white font-semibold border-r-slate-950 py-1.5 px-2 mx-2">Rowan J. Kortlandt</p>
          <p className="text-white font-light border-r-slate-950 py-1.5 px-2 mx-2">rkortlandt@gmail.com</p>
      </nav>
      </div>
  );
}

export default function Nav() {
  return (
    <div>
      <nav className="bg-slate-800 w-full h-19 flex-col flex lg:py-2 lg:px-1 lg:flex-row lg:sticky" id="nav">
          <button className="lg:rounded-full lg:bg-slate-500 text-white font-semibold py-1.5 px-2 lg:mx-2 max-lg:border-b-slate-900 max-lg:border-b-2 hover:bg-slate-600 transition-colors duration-250" onClick={() => window.scroll(0, 1000)}>Intro</button>
          <button className="lg:rounded-full lg:bg-slate-500 text-white font-semibold py-1.5 px-2 lg:mx-2 max-lg:border-b-slate-900 max-lg:border-b-2 hover:bg-slate-600 transition-colors duration-250">Education</button>
          <button className="lg:rounded-full lg:bg-slate-500 text-white font-semibold py-1.5 px-2 lg:mx-2 max-lg:border-b-slate-900 max-lg:border-b-2 hover:bg-slate-600 transition-colors duration-250">Work Experience</button>
          <button className="lg:rounded-full lg:bg-slate-500 text-white font-semibold py-1.5 px-2 lg:mx-2 max-lg:border-b-slate-900 max-lg:border-b-2 hover:bg-slate-600 transition-colors duration-250">Technology skills &amp; Related experience</button>
          <span className="grow"></span>
          <p className="text-white font-semibold border-r-slate-950 py-1.5 px-2 mx-2">Rowan J. Kortlandt</p>
          <p className="text-white font-light border-r-slate-950 py-1.5 px-2 mx-2 hidden xl:block max-lg:block">269-929-8640</p>
          <p className="text-white font-light border-r-slate-950 py-1.5 px-2 mx-2">rkortlandt@gmail.com</p>
      </nav>
      </div>
  );
}
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import React, { useEffect, useRef, useState } from 'react';
//@ts-ignore
import jsImg from './assets/js.webp';
//@ts-ignore
import tsImg from './assets/ts.jfif';
//@ts-ignore
import reactImg from './assets/react.svg';
//@ts-ignore
import vueImg from './assets/vue.png';
//@ts-ignore
import tailWindImg from './assets/tailwind.png';
//@ts-ignore
import w3schoolsImg from './assets/w3schools.png';
//@ts-ignore
import cppImg from './assets/c++.png';

function WorkExperience () {
    return (
        <div className="bg-slate-600 mx-10 max-sm:mx-3 my-5 px-2 py-2 rounded-lg" >
            <h1 className="text-4xl font-bold text-slate-200 py-1">Work Experience</h1>
            <div className="bg-slate-800 rounded-md py-2 my-2">
                <div className="flex mx-5 max-sm:flex-col justify-center">
                    <p className="text-slate-200 font-bold text-2xl">Summer Technology Crew Assistant</p>
                    <a className="grow"></a>
                    <p className="text-slate-200 font-bold">Summer 2022</p>
                </div>
                <div className="mx-12">
                    <p className="text-slate-200 font-semibold">Otsego Public Schools, Otsego, MI</p>
                    <ul className="list-disc list-inside">
                        <li className="text-slate-200">Worked with the Director of Technology and her crew to deploy over 2,000 new devices</li>
                        <li className="text-slate-200">Rewired Chromebook Carts</li>
                        <li className="text-slate-200">Replaced old devices with new ones</li>
                        <li className="text-slate-200">Unboxed new Chromebooks and iPads, sanitized and enrolled them into the system</li>
                        <li className="text-slate-200">Asset tagged Chromebooks, iPads, and chargers</li>
                    </ul>
                </div>
            </div>
            <div className="bg-slate-800 rounded-md py-2 my-2">
                <div className="flex mx-5 max-sm:flex-col justify-center">
                    <p className="text-slate-200 font-bold text-2xl">Corn Detasseling</p>
                    <a className="grow"></a>
                    <p className="text-slate-200 font-bold">Summer 2021</p>
                </div>
                <div className="mx-12">
                    <p className="text-slate-200 font-semibold">Great Lakes Detasseling, LLC., Portage, MI 49002</p>
                    <ul className="list-disc list-inside">
                        <li className="text-slate-200">Seasonal helper to detassel corn</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function TechnologySkills () {
    const [cardNum, setCardNum] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const maxCardNum = 1;
    const minCardNum = 0;
      
    const handleLeftClick = () => {
        if (cardNum > minCardNum) {
        setCardNum(cardNum - 1);
        }
    };
    const handleRightClick = () => {
        if (cardNum < maxCardNum) {
        setCardNum(cardNum + 1);
        } else {
        setCardNum(minCardNum);
        }
    };
    const togglePause = () => {
        setIsPaused(!isPaused);
    };
      
    useEffect(() => {
        if (!isPaused) {
            const timer = setTimeout(() => {
                handleRightClick();
            }, 30000); // 3000ms = 3 seconds
            return () => {
                clearTimeout(timer);
            };
        }
    }, [cardNum, isPaused]);

    const handleCardChange = () => {
        switch (cardNum) {
            case 0:
                return (
                    <div className="bg-slate-800 rounded-md py-2 my-2 sm:h-84 transition-colors duration-300">
                        <div className='md:flex mx-5 max-md:flex-col items-center justify-between'>
                            <p className="text-slate-200 text-2xl font-bold">Programmer on high school robotics team</p> 
                            <p className="text-slate-200 mx-2 pt-1">2023 Season Charged Up</p>
                        </div>
                        <ul className='list-disc list-inside mx-12'>
                            <li className="text-slate-200">Worked to program the robot for both autonomous mode and driver controlled mode</li>
                            <li className="text-slate-200">Used Java</li>
                            <li className="text-slate-200">Used basic principles of object oriented programming and conditional logic</li>
                            <li className="text-slate-200">Team qualified for state, ending up 34th in the State </li>
                            <li className="text-slate-200">Qualified and competed at the World Competition in Houston, TX. </li>
                            <li className="text-slate-200">Video of our robot <a className='text-teal-200 underline' href="https://www.youtube.com/watch?v=wdcOsfQ0gQE&t">here</a> (5152)</li>
                        </ul>
                    </div>
                );
            case 1:
                return (
                    <div className="bg-slate-800 rounded-md py-2 my-2 sm:h-84 transition-colors duration-300">
                          <div className='md:flex mx-5 max-md:flex-col items-center justify-between'>
                            <p className="text-slate-200 text-2xl font-bold">Web Development</p> 
                        </div>
                        <ul className='mx-12 list-disc list-inside'>
                            <div className='flex items-center'>
                                <div className='mr-2 my-2 w-fit h-fit bg-slate-600 px-2 py-2 rounded-lg'>
                                    <img src={jsImg} width={50} height={50}></img>
                                </div>
                                <div className='mr-2 my-2 w-fit h-fit bg-slate-600 px-2 py-2 rounded-lg'>
                                    <img src={tsImg} width={50} height={50}></img>
                                </div>
                                <div className='mr-2 my-2 w-fit bg-slate-600 px-2 py-2.5 rounded-lg'>
                                    <img src={reactImg} width={50} height={50}></img>
                                </div>
                                <div className='mr-2 my-2 w-fit h-fit bg-slate-600 px-2 py-2 rounded-lg'>
                                    <img src={vueImg} width={50} height={50}></img>
                                </div>
                                <div className='mr-2 my-2 w-fit h-fit bg-slate-600 px-2 py-3 rounded-lg'>
                                    <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" width={50} height={50}></img>
                                </div>
                            </div>
                            <li className="text-slate-200 text-bold">Knowledge of...</li>
                                <ul className='mx-7 list-decimal list-inside'>
                                    <li className="text-slate-200 text-sm">Javascript</li>
                                    <li className="text-slate-200 text-sm">Typescript</li>
                                    <li className="text-slate-200 text-sm">Vue</li>
                                    <li className="text-slate-200 text-sm">React, which I used for this website</li>
                                    <li className="text-slate-200 text-sm">TailwindCSS for styling</li>
                                </ul>
                            <li className="text-slate-200">I created a project in 8th grade for visualizing translations, dilations, rotations, and reflections. I am currently working on V2.0 that uses React and is much better overall. You can view V1.0 <a href='https://rkortlandt.github.io/Translation-Project/' className='text-teal-200 underline'>here</a></li>
                            <li className="text-slate-200">I am also currently working on an Application using Vue and a backend technology called <a href='https://pocketbase.io' className='text-teal-200 underline'>Pocketbase</a> to create a scouting app for FIRST roboitcs</li>
                        </ul>
                    </div>
                );
            // case 2:
            //     return (
            //         <div className="bg-slate-800 rounded-md py-2 my-2 sm:h-64">
            //         </div>
            //     );
            // case 3: 
            //     return (
            //         <div className="bg-slate-800 rounded-md py-2 my-2 sm:h-64">
            //         </div>
            //     );
            default:
                return (
                    <div className="bg-slate-800 rounded-md py-2 my-2 sm:h-64">
                        <p>there was an error loading the current card</p>
                    </div>
                );
        }
    }
    return (
        <div className="bg-slate-600 mx-10 max-sm:mx-3 my-5 px-2 py-2 rounded-lg" >
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold text-slate-200 py-1">Technology skills</h1>
                <div className="flex items-center flex-col sm:flex-row">
                    <div className="bg-slate-200 rounded-lg w-fit h-fit flex justify-center items-center">
                        <button onClick={handleLeftClick} className="flex items-center hover:bg-slate-500 rounded-l-lg transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
                        <button onClick={togglePause} className="flex items-center hover:bg-slate-500 transition-colors">
                            {isPaused ? (<span className="material-symbols-outlined">play_arrow</span>) : (<span className="material-symbols-outlined">pause</span>)}</button>
                        <button onClick={handleRightClick} className="flex items-center hover:bg-slate-500 rounded-r-lg transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
                    </div>
                    <div className='sm:mx-1 bg-slate-200 px-2 rounded-lg my-1 grow'>
                        <p>{cardNum + 1} / {maxCardNum + 1}</p>
                    </div>
                </div>
            </div>
         {handleCardChange()}
        </div>
    );
}

function AboutMe () {
    //function that finds the time and returns a greeting based on the time
    function getTime () {
        const date = new Date();
        const hour = date.getHours();
        if (hour < 12) {
            return "Good Morning 🌞";
        } else if (hour < 18) {
            return "Good afternoon, I hope you're having a good day.";
        } else {
            return "Good evening, 🌇";
        }
    }
    //function that gets the number of years since 2008
    function getYears () {
        const date = new Date();
        const year = date.getFullYear();
        return year - 2008;
    }


    return (
        <div className="bg-slate-600 mx-10 max-sm:mx-3 my-5 px-2 py-2 rounded-lg" >
            <h1 className="text-4xl font-bold text-slate-200 py-1">About Me</h1>
            <div className="bg-slate-800 rounded-md py-2 my-2">
                <p className="text-lg text-slate-200 py-1 px-2">{getTime()} My name is Rowan and I am a {getYears()} year old software developer. I play tennis in the fall, I love to read, and I am currently a Boy Scout. I attend Otsego High School and have a 4.0 GPA I am also in band and on the Drumline. I was selected to serve on the superintendent's advisory council. I am a very hard worker and motivated individual.</p>
            </div>
        </div>
    );
}

function Certifications () {
    return (
        <div className="bg-slate-600 mx-10 max-sm:mx-3 my-5 px-2 py-2 rounded-lg" >
            <h1 className="text-4xl font-bold text-slate-200 py-1">Certifications</h1>
            <div className="bg-slate-800 rounded-md py-2 my-2">
                <p className="text-xl text-slate-200 py-1 px-2">Currently Working On</p>
                    <p className='text-slate-200 px-3'>A certification from <a className='text-teal-200 underline' href='https://pythoninstitute.org'>Python Institute</a></p>   
            </div>
        </div>
    );
}

function References () {
    return (
        <div className="bg-slate-600 mx-10 max-sm:mx-3 my-5 px-2 py-2 rounded-lg" >
            <h1 className="text-4xl font-bold text-slate-200 py-1">References</h1>
            <div className="bg-slate-800 rounded-md py-4 my-2">
                <div className='px-5'>
                    <p className="text-slate-200 text-2xl font-bold ">Michelle Triemstra - Director of Technology, Otsego Public Schools</p> 
                    <p className="text-slate-200 text-xl px-3">Contact info: <br></br> 400 Sherwood Street Otsego, Mi 49078 <br></br> Work: 269-694-7900</p>
                </div>
                <div className='px-5'>
                <p className="text-slate-200 text-2xl font-bold">Michael Miller Teacher/Robotics Coach, Otsego Public Schools</p>
                <p className="text-slate-200 text-xl px-3">Contact info <br></br> 550 Washington Street Otsego, MI 49078 <br></br> 269-694-7900</p>
                </div>
            </div>
        </div>
    );
}

function scrollIntoView (ref: React.RefObject<HTMLDivElement>) {
    if (ref.current === null) return;
    ref.current.scrollIntoView({behavior: 'smooth', block: 'center'});
}

export default function Hero (props: {scrollTo: 'AboutMe' | 'WorkExperience' | 'TechnologySkills' | 'References' | 'Certifications'}) {

    const AboutMeRef = useRef<HTMLDivElement>(null);
    const WorkExperienceRef = useRef<HTMLDivElement>(null);
    const TechnologySkillsRef = useRef<HTMLDivElement>(null);
    const ReferencesRef = useRef<HTMLDivElement>(null);
    const CertificationsRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        console.log(`scrolling to ${props.scrollTo}`)
        switch (props.scrollTo) {
            case 'AboutMe':
                scrollIntoView(AboutMeRef);
                break;
            case 'WorkExperience':
                scrollIntoView(WorkExperienceRef);
                break;
            case 'TechnologySkills':
                scrollIntoView(TechnologySkillsRef);
                break;
            case 'References':
                scrollIntoView(ReferencesRef);
                break;
            case 'Certifications':
                scrollIntoView(CertificationsRef);
                break;
            default:
                break;
        }
    }, [props.scrollTo]);
    return (
        <div className="flex flex-col bg-slate-800 h-full w-full pt-12">
            <div className='mb-20' ref={AboutMeRef}>
                <AboutMe/>
            </div>
            <div className='my-20' ref={WorkExperienceRef}>
                <WorkExperience/>
            </div>
            <div className='my-20' ref={TechnologySkillsRef}>
                <TechnologySkills/>
            </div>
            <div className='my-20' ref={ReferencesRef}>
                <References/>
            </div>
            <div className='my-20 mb-56' ref={CertificationsRef}>
                <Certifications/>
            </div>
        </div>
    );
}
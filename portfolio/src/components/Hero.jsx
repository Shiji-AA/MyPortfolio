import photo from "../assets/images/photo.jpeg";
import resume from "../assets/images/resume.pdf";

// Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "../index.css";

function Hero() {

    // useEffect hook for AOS 
    useEffect(() => {
        AOS.init({ duration: 5000 });
    }, []);

    return (
        <div id="Hero" className="bg-[#F5F5F5] h-[80vh] flex flex-col justify-evenly items-center md:h-screen md:flex-row md:justify-center">
            <div className="w-[80%] text-center md:w-1/2 md:text-left" data-aos="fade-up">
                <p className="text-xl p-2 font-bold">Hi, I am</p>
                <h1 className="text-3xl p-2 font-bold md:text-6xl">Shiji AA</h1>
                {/* Added a span for green color and animation */}
                <h3 className="p-2 font-bold md:text-2xl">
                    I am a <span className="text-green-800" data-aos="fade-up" data-aos-delay="1000">MERN Stack Developer</span>
                </h3>
                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 me-2 my-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                    <a href={resume} download='ShijiAA'>Resume</a>
                </button>
            </div>
            <div className="w-[70%] h-auto my-5 rounded-sm md:w-1/3" data-aos="fade-up">
                <img className="w-fit border rounded-md" src={photo} alt="profile" />
            </div>
        </div>
    );
}

export default Hero;

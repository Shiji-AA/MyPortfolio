

//Animation on Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Education(){

    //useEffect hook for aos 
   useEffect(()=>{
    AOS.init({duration:2000});
    },[])


    return(
        <>
        <section className="bg-white"  data-aos="fade-up">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-black sm:text-lg  ">
                    <h2 className="mb-4 text-2xl text-center md:text-4xl md:text-left tracking-tight font-semibold">Experience</h2>
                    <h5 className="mb-4 text-2xl text-center md:text-xl md:text-left tracking-tight font-bold">Brototype : 2023-present </h5 >
                    <p className="font-semibold text-justify mb-3 p-4 md:p-0 md:text-left ">As Mern Stack Developer , I effectively completed a full stack development programme and completed two industry Level Projects through Self learning. </p>
                    <h5 className="mb-4 text-2xl text-center md:text-xl md:text-left tracking-tight font-bold"> Karvy Innotech Ltd  : 2018-2023 </h5>
                    <p className="font-semibold text-justify mb-3 p-4 md:p-0 md:text-left ">During my tenure as a Senior Executive and Team Lead for the IOCL project, I delivered onsite operating system and hardware support to customers of Indian Oil Corporation Limited. My primary focus was on providing effective solutions for servers and storage systems, ensuring optimal performance and reliability for critical infrastructure. </p>
                    <h5 className="mb-4 text-2xl text-center md:text-xl md:text-left tracking-tight font-bold">HCL Services Ltd : 2007-2018 </h5 >
                    <p className="font-semibold text-justify mb-3 p-4 md:p-0 md:text-left ">As customer Engineer , During my tenure, I effectively managed team members and provided online technical support across various sectors, including IT@SCHOOL, Federal Bank, KSEB, and eCourts. </p>
                    
                    <h2 className="mb-4 py-4 text-2xl text-center md:text-4xl md:text-left tracking-tight font-semibold">Education</h2>
                    <p className=" font-semibold px-4 md:py-2 md:px-0">I am an Engineering Graduate specialising in Electrical now transitioning my passion into the exciting field of web development.</p>
                
                    <div className="flex justify-center md:justify-start">
                    <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-6 ml-2"><a href="https://www.linkedin.com/in/shijiaa/" target='_blank'>Let s Connect</a></button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8 p-4">
                    <img className=" rounded-lg w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                    <img className="mt-4 lg:mt-10 rounded-lg w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
                </div>
            </div>
        </section>
        </>

    )
}

export default Education;
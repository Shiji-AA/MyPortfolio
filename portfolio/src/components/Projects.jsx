

//Slick React Carousel Library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import images from assets
import smartlearningSlide from "../assets/images/elearning.jpg"
import ecommerceSlide from "../assets/images/ecommerceshoes.jpg"
import passwordSlide from "../assets/images/passwordGenerator.png"

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
            
        }
    ]
  };


  const slideData = [
    { id: 1, name: "Smart Learning", img: smartlearningSlide, Skills: "React JS", link:"https://smartlearningofficial.online/" },
    { id: 2, name: "Feragamo", img: ecommerceSlide, Skills: "JavaScript", link:"https://feragamo-project.onrender.com/" },
    { id: 3, name: "Password Generator", img: passwordSlide, Skills: "React JS", link:"https://password-generator-rose-sigma.vercel.app/" },
    
  ];



  return (
    <div  id="Projects" className="slider-container px-14 py-10 md:py-20 bg-[#1f2b36] text-white">
        <h1 className="text-3xl font-bold mb-3 md:mb-6 text-center ">My Projects</h1>
      <Slider {...settings}>
        {
            slideData.map(function(item){
                return(
                      <div key={item.id} className="px-1.5 py-10">
                      <img className="h-[200px] md:h-[300px]" src={item.img} alt={item.name} />
                      <div className="flex gap-4 items-center mt-4">
                          <h2 className="text-xl py-4 font-semibold">{item.name}</h2>
                          <button className="bg-white hover:bg-slate-300 text-gray-800 font-semibold text-sm py-1 px-2 border focus:ring-4 border-slate-200 rounded shadow"><a href={item.link} target="_blank">View</a></button>
                      </div>
                        
                    </div>
                )
            })
        }

            
      </Slider>

      <div className="flex justify-center items-center mt-14">
      <button className="bg-white px-4 py-2 text-lg font-semibold border-none rounded-sm text-black">Explore</button>
      </div>

      
    </div>
  );
}

export default Projects;
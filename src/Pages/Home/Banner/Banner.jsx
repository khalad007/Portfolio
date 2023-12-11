import user from "../../../assets/khalad.jpg"
import linkedin from "../../../assets/linkedin.png"
import github from "../../../assets/github.png"
import { IoLocationOutline } from "react-icons/io5";
// import { FiGithub } from "react-icons/fi";

const Banner = () => {
    return (
        
            <div className="hero h-[60vh] ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={user} className="lg:w-64 lg:h-80 md:w-60 md:h-72 w-52 h-60 rounded-lg lg:ml-64 shadow-2xl" />
                    <div className="lg:w-[760px] lg:mt-0 md:mt-4 mt-5">
                        <h1 className="lg:text-5xl mg:text-4xl text-2xl font-bold">Hi, I’m Khalad 👋</h1>
                        <p className="py-6 font-normal text-base">I am Khalad Shifullah.A dedicated and enthusiastic Diploma Engineer in Computer Science. My journey in technology has equipped me with a strong foundation in the MERN stack, including expertise in HTML, CSS, JSX, Tailwind CSS, and DaisyUI..</p>

                        <p className="flex items-center font-bold mt-6"><IoLocationOutline /> <span className="ml-4">Chittagong , Bangladesh</span></p>

                        <p className="flex items-center gap-5 mt-10"> 
                        <a href="https://github.com/khalad007"><img className="h-6 w-6" src={github} alt="" /> </a>
                        <a href="https://www.linkedin.com/in/khaladshifullah/"><img className="h-6 w-6" src={linkedin} alt="" /> </a> </p>
                       
                        
                    </div>
                </div>
            </div>
        
    );
};


export default Banner;

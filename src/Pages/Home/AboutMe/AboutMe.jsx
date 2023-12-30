import about from "../../../assets/about.jpg"
import { IoCloudDownloadOutline } from "react-icons/io5";
import resumePDF from "../../../assets/Khalads_Resume.pdf"
import { AnimatePresence, motion } from "framer-motion"
const AboutMe = () => {
    const handleResumeDownload = () => {
        // Create a virtual anchor element
        const link = document.createElement("a");
        link.href = resumePDF; // Set the href attribute to the path of your PDF file
        link.download = "Khalad_Resume.pdf"; // Set the desired name for the downloaded file
        document.body.appendChild(link);
        link.click(); // Simulate a click on the anchor element
        document.body.removeChild(link); // Clean up the virtual anchor element
    };
    return (
        <AnimatePresence>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                    ease: 'anticipate',
                    duration: '0.3'
                }} className="lg:mt-0 mt-[400px]">
                <div className="text-center">
                    <button className="btn my-10 text-xl border-b-4 border-b-black">About Me</button>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className="w-[450px] h-[400px]" src={about} alt="Album" /></figure>
                    <div className="card-body lg:w-1/2">
                        <h2 className="card-title">Curious about me?</h2>
                        <p>Greetings! 👋 I am Khalad Shifullah , a dedicated and enthusiastic Diploma Engineer in Computer Science from Bangladesh Sweden Polytechnic Institute. My journey in technology has equipped me with a strong foundation in the MERN stack, including expertise in HTML, CSS, JSX, Tailwind CSS, and DaisyUI.

                            <br /> <br />

                            My passion lies in crafting innovative and efficient solutions, and I thrive in dynamic and collaborative environments. I am constantly expanding my skill set and currently exploring more about Python, SQL Injection, and Linux.
                            <br /> <br />
                            🎯 And I might lack in skills I make up for with my determination to learn.
                            <br /> <br />
                            In addition to my coding ventures, I find joy in 🚴 cycling through scenic routes, solving 🧊 cubes with speed and precision, engaging in ♟️ chess battles, and immersing myself in the world of 🎮 online gaming. Collaboration is key, and you can often find me 💻 coding with friends on exciting projects on GitHub..</p>

                        <a className="btn btn-sm btn-neutral w-32 ml-7" onClick={handleResumeDownload}>Resume <IoCloudDownloadOutline /></a>

                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AboutMe;
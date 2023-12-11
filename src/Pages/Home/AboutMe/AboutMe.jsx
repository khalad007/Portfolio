import about from "../../../assets/about.jpg"
const AboutMe = () => {
    return (
        <div className="lg:mt-0 mt-[430px]">
            <div className="text-center">
                <button className="btn my-10 text-xl border-b-4 border-b-black">About Me</button>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-[450px] h-[400px]" src={about} alt="Album" /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Greetings! 👋 I am Khalad Shifullah , a dedicated and enthusiastic Diploma Engineer in Computer Science from Bangladesh Sweden Polytechnic Institute. My journey in technology has equipped me with a strong foundation in the MERN stack, including expertise in HTML, CSS, JSX, Tailwind CSS, and DaisyUI.

                    <br /> <br />

                        My passion lies in crafting innovative and efficient solutions, and I thrive in dynamic and collaborative environments. I am constantly expanding my skill set and currently exploring more about Python, SQL Injection, and Linux.
                        <br /> <br />
                        🎯 And I might lack in skills I make up for with my determination to learn.
                        <br /> <br />
                        In addition to my coding ventures, I find joy in 🚴 cycling through scenic routes, solving 🧊 cubes with speed and precision, engaging in ♟️ chess battles, and immersing myself in the world of 🎮 online gaming. Collaboration is key, and you can often find me 💻 coding with friends on exciting projects on GitHub..</p>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;
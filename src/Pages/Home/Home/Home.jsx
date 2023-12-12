import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <div className="lg:mb-0 mb-[340px]">
                <Banner></Banner>
            </div>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <GetInTouch></GetInTouch>
            <Footer></Footer>
        </div>
    );
};

export default Home;
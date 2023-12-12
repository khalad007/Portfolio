import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
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
            <Footer></Footer>
        </div>
    );
};

export default Home;
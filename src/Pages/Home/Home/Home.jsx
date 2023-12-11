import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <div className="lg:mb-0 mb-[340px]">
                <Banner></Banner>
            </div>


            <AboutMe></AboutMe>

        </div>
    );
};

export default Home;
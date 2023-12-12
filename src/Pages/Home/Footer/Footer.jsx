// import flink from "../../../assets/flink.png"
// import fgit from "../../../assets/fgit.png"
// import ffb from "../../../assets/ffb.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
               
                {/* <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/khaladshifullah/"><img className="h-8 w-8" src={flink} alt="" /></a>
                        <a href="https://github.com/khalad007"><img className="h-8 w-8" src={fgit} alt="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100094911747880"><img className="h-8 w-8" src={ffb} alt="" /></a>
                    </div>
                </nav> */}
                <aside>
                    <p>Copyright © 2023 - All right reserved by Khalad Shifullah</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
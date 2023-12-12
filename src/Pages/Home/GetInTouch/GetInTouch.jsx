import gmail from "../../../assets/gmail.png"
import phone from "../../../assets/phone.png"
import { FaRegCopy } from "react-icons/fa6";
import flink from "../../../assets/flink.png"
import fgit from "../../../assets/fgit.png"
import ffb from "../../../assets/ffb.png"

const GetInTouch = () => {
    const handleCopyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Copied to clipboard!');
            })
            .catch((error) => {
                console.error('Unable to copy to clipboard', error);
            });
    };

    return (
        <div>
            <div className="text-center">
                <button className="btn my-10 text-xl font-semibold border-b-4 border-b-black">Get In Touch</button>
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-semibold">What’s next? Feel free to reach out to me <br /> if you are looking for a MERN stack Developer, simply want to connect. :</h1>

                <div className="my-10">
                    <div className="flex justify-center items-center my-10">

                        <img className="h-8 w-8 " src={gmail} alt="" />
                        <p className="pl-10 text-lg font-semibold">Email : abirjr78@gmail.com
                            <button className="copy-btn ml-10" onClick={() => handleCopyToClipboard('abirjr78@gmail.com')}><FaRegCopy /></button>
                        </p>
                    </div>
                    <div className="flex justify-center items-center my-10 ">
                        <img className="h-8 w-8 " src={phone} alt="" />
                        <p className="pl-10 text-lg font-semibold">Phone : +8801877578440
                            <button className="copy-btn ml-10" onClick={() => handleCopyToClipboard('+8801877578440')}><FaRegCopy /></button>
                        </p>
                    </div>
                </div>


            </div>
            
                <div className="flex items-center justify-center gap-4 my-7">
                    <a href="https://www.linkedin.com/in/khaladshifullah/"><img className="h-8 w-8" src={flink} alt="" /></a>
                    <a href="https://github.com/khalad007"><img className="h-8 w-8" src={fgit} alt="" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100094911747880"><img className="h-8 w-8" src={ffb} alt="" /></a>
                </div>
            
        </div>
    );
};

export default GetInTouch;



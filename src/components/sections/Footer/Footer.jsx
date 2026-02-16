import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";

function Footer() {
    return (
        <footer className="w-full mx-auto max-w-[1170px] xl:px-0 px-4 pt-[50px] pb-[84px] flex gap-5">
            <a href="#" className="w-[50px] h-[50px] hover:opacity-85 transition-all flex justify-center items-center bg-sport-gray-800 rounded-[4px]">
                <img src={facebook} alt="#" />
            </a>
            <a href="#" className="w-[50px] h-[50px] hover:opacity-85 transition-all flex justify-center items-center bg-sport-gray-800 rounded-[4px]">
                <img src={instagram} alt="#" />
            </a>
            <a href="#" className="w-[50px] h-[50px] hover:opacity-85 transition-all flex justify-center items-center bg-sport-gray-800 rounded-[4px]">
                <img src={twitter} alt="#" />
            </a>
        </footer>
    );
}

export default Footer;

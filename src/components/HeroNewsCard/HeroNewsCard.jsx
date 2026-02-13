import { Link } from "react-router-dom";
function HeroNewsCard({ news }) {
    return (
        <>
            <Link to={`/news/${news.slug}`}>
                <div className="w-full h-[233px] rounded-[6px] relative flex flex-col justify-end rounded-[6px] cursor-pointer hover:opacity-80 transition-all">
                    <img src={news.picture} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />

                    <div className="px-[18px] pb-[12px] relative z-1 rounded-[6px] bg-gradient-to-t from-[#F2F2F2] to-transparent pt-[66px]">
                        <p className="text-sport-gray-800 font-medium text-[10px] opacity-60">
                            {news.author} - {news.date}
                        </p>
                        <p className="font-heading text-[16px] leading-[1.2] text-sport-gray-800 font-bold mt-1">{news.description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
export default HeroNewsCard;

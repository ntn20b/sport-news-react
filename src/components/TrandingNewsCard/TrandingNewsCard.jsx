import cyclist from "../../assets/cyclist-leads-actionfront-view-man-riding-bicycle-racing-road 1.webp";
import { Link } from "react-router-dom";

function TrandingNewsCard({ trand, index }) {
    return (
        <Link to={`/news/${trand.slug}`}>
            <div className="flex gap-5 items-stretch">
                <img src={trand.image} alt="" className="max-w-[43%] w-full rounded-[6px] object-cover" />

                <div className={`md:max-w-[280px] w-full flex ${index === 0 ? "" : "border-t border-sport-gray-400"}`}>
                    <div className="w-[85.5%] flex flex-col justify-between py-3">
                        <div>
                            <p className="font-medium text-[10px] text-sport-gray-800 opacity-60 line-clamp-1">{trand.author} - 03 June 2023</p>
                            <h3 className="h3 pt-1 line-clamp-2">{trand.name}</h3>
                        </div>
                        <p className="text-[12px] leading-[1.3] text-sport-gray-900 line-clamp-3">{trand.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default TrandingNewsCard;

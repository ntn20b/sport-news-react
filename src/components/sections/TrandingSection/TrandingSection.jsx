import cyclist from "../../../assets/cyclist-leads-actionfront-view-man-riding-bicycle-racing-road 1.webp";
import cyclistBg from "../../../assets/cycling-post-img.webp";
import TrandingNewsCard from "../../TrandingNewsCard/TrandingNewsCard";
import { Link } from "react-router-dom";

const tranding = [
    {
        id: 1,
        name: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
        slug: "cyclist",
        image: cyclist,
        author: "Race98",
        description: "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s",
    },
    {
        id: 2,
        name: "Savilia Blunk Embraces Longer Season with World Cup",
        slug: "cyclist",
        image: cyclist,
        author: "Jony.Ls",
        description: "Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some",
    },
    {
        id: 3,
        name: "Savilia Blunk Embraces Longer Season with World Cup",
        slug: "cyclist",
        image: cyclist,
        author: "Jony.Ls",
        description: "Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some",
    },
];
function TrandingSection() {
    return (
        <section className="mt-20">
            <div className="w-full mx-auto max-w-[1170px] xl:pl-9 xl:pr-0 px-4 flex md:flex-row flex-col-reverse items-stretch bg-sport-gray-100 rounded-[6px]">
                <div className="md:max-w-[48.7%] p-9 pr-0 pt-7 pl-0">
                    <h2 className="h2 mb-4">Trending News</h2>
                    <div className="flex flex-col gap-5">
                        {tranding.map((trand, index) => (
                            <TrandingNewsCard key={trand.id} trand={trand} index={index} />
                        ))}
                    </div>
                </div>
                <Link
                    className="md:max-w-[51%] md:h-auto h-[300px] w-full bg-cover bg-center rounded-[6px] md:pt-[30px] pt-4 md:pb-[46px] pb-4 md:px-9 px-3 flex flex-col justify-between hover:opacity-80 transition-all"
                    style={{ backgroundImage: `url(${cyclistBg})` }}
                    to={`/news/`}>
                    <p className="label label-lg max-w-[107px] w-full h-[36px]">Cycling</p>
                    <div>
                        <p className="text-[18px] text-white">Debits - 03 June 2023</p>
                        <h3 className="font-heading font-bold md:text-[36px] text-[28px] text-white leading-[1.2] mt-[14px]">DISCOVER THE MEMBER BENEFITS OF USA CYCLING!</h3>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default TrandingSection;

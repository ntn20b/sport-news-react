import { useState, useEffect } from "react";
import heroBg from "../../../assets/hero-bg.webp";
import HeroNewsCard from "../../HeroNewsCard/HeroNewsCard";
import beautifulYoungAfricanWomanSports from "../../../assets/beautiful-young-african-woman-sports-clothing-running-against-gray-background 1.webp";
import Button from "../../ui/Button";

function Hero() {
    const news = [
        {
            id: 1,
            slug: "ethiopian-runners-win",
            picture: beautifulYoungAfricanWomanSports,
            author: "Race98",
            date: "03 June 2023",
            description: "Ethiopian runners took the top four spots.",
        },
        {
            id: 2,
            slug: "ethiopian-runners-win-2",
            picture: beautifulYoungAfricanWomanSports,
            author: "Race98",
            date: "03 June 2023",
            description: "Second news example here.",
        },
    ];
    return (
        <section className="relative">
            <div className="w-full mx-auto max-w-[1170px] flex md:flex-row flex-col justify-between lg:gap-4 gap-8 w-full lg:pt-[111px] pt-[20px] xl:px-0 px-4 relative z-[2]">
                <img src={heroBg} alt="#" className="absolute max-w-[1080px] w-full top-0 left-[-200px] lg:block hidden" />
                <div className="md:max-w-[65.3%] w-full flex flex-col lg:items-end md:-mb-10 lg:gap-4 gap-10">
                    <h1 className="font-heading md:text-[80px] text-[50px] leading-[0.93] font-bold uppercase w-full mb-0 md:[&>br]:block [&>br]:hidden bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
                        Top <br />
                        scorer to <br />
                        the final <br />
                        match
                    </h1>
                    <div className="lg:self-end relative z-[3] mt-auto">
                        <p className="text-[18px] leading-[1.38] text-sport-gray-800 md:max-w-[365px] w-full">
                            The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals
                        </p>
                        <Button children={"continue reading"} size="lg" className={"mt-5"}></Button>
                    </div>
                </div>
                <div className="lg:max-w-[23%] md:max-w-[35%] w-full">
                    <p className="xl:text-[20px] text-[16px] font-medium text-sport-gray-300 xl:px-4 px-2 py-1 bg-sport-gray-200 rounded-[3px] w-fit h-[34px] flex justify-center items-center xl:mb-6 mb-3">
                        Today
                    </p>
                    <div className="flex flex-col xl:gap-[30px] gap-4">
                        {news.map((item) => {
                            return <HeroNewsCard key={item.id} news={item}></HeroNewsCard>;
                        })}
                    </div>
                </div>
            </div>

            {/* <img src={basketbollPlayer} alt="#" className="" /> */}
        </section>
    );
}

export default Hero;

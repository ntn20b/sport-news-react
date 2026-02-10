import { useState, useEffect } from "react";
import basketbollPlayer from "../../../assets/basketball-player-action-sunset 1.webp";

function Hero() {
    return (
        <section className="w-full mx-auto max-w-[1170px] flex ">
            <div className="max-w-[23%] w-full"></div>
            <img src={basketbollPlayer} alt="#" className="" />
        </section>
    );
}

export default Hero;

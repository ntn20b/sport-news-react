import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import karateFighter from "../../../assets/karate-fighters.webp";

function InfoSection() {
    const apiKey = import.meta.env.VITE_FOOTBALL_API_KEY;
    const [leagueId, setLeagueId] = useState(100);
    const { data: clubs } = useQuery({
        queryKey: ["standings", leagueId],
        queryFn: () =>
            fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${leagueId}&APIkey=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                    return data;
                })
                .catch(() => console.log("Football API ERROR")),
    });

    return (
        <section className="md:mt-20 mt-8" id="info-section">
            <div className="w-full max-w-[1170px] mx-auto xl:px-0 px-4 flex justify-between md:flex-row flex-col-reverse gap-[30px]">
                <div className="md:max-w-[40%] w-full">
                    <h2 className="h2 mb-4">Recent News</h2>
                    <div>
                        <div className="w-full h-[300px] overflow-hidden rounded-[6px] relative hover:opacity-90 transition-all">
                            <a href="#" className="block w-full h-full">
                                <img src={karateFighter} alt="" className="w-full h-full object-cover" />
                                <div className="px-[18px] py-4 absolute bottom-0 backdrop-blur-md bg-white/2 bg-[#c4a482]/30 shadow-[0_0_50px_-25px_rgba(0,0,0,0.5)] w-full rounded-b-[6px]">
                                    <p className="font-main text-[10px] font-medium text-sport-gray-100">Day 5 Highlights</p>
                                    <h5 className="h5 text-sport-gray-100 mt-1">Baku 2023 World Taekwondo Championships</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:max-w-[60%] w-full">
                    <h2 className="h2 mb-4">Clubs Ranking</h2>
                    <div className="bg-sport-gray-100 lg:pt-4 lg:pb-3 md:py-3 py-2 rounded-[6px] lg:px-7 md:px-4 px-2">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="text-left font-heading md:text-[16px] text-[10px] text-sport-gray-800 font-bold pb-4">Club</th>
                                    <th className="font-heading md:text-[16px] text-[10px] text-sport-gray-800 font-bold pb-4 text-center">GP</th>
                                    <th className="font-heading md:text-[16px] text-[10px] text-sport-gray-800 font-bold pb-4 text-center">W</th>
                                    <th className="font-heading md:text-[16px] text-[10px] text-sport-gray-800 font-bold pb-4 text-center">D</th>
                                    <th className="font-heading md:text-[16px] text-[10px] text-sport-gray-800 font-bold pb-4 text-center">L</th>
                                    <th className="font-heading md:text-[16px] text-[10px] text-sport-gray-800 font-bold pb-4 text-center">PTS</th>
                                    <th className="font-heading md:text-[16px] text-[10px] text-sport-gray-800 font-bold pb-4 text-center">HLW</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(clubs) &&
                                    clubs.slice(0, 6).map((club, index) => (
                                        <tr key={club.team_id || index}>
                                            <td className="py-[7px]">
                                                <div className="flex items-center gap-[7px]">
                                                    <p className="text-[13px] font-heading text-sport-gray-800 font-bold">{club.overall_league_position}</p>
                                                    <img src={club.team_badge} alt={club.team_name} className="max-w-[24px] w-full" />
                                                    <p className="text-[13px] font-heading text-sport-gray-800 font-bold">{club.team_name}</p>
                                                </div>
                                            </td>
                                            <td className="px-3 py-[7px] md:text-[16px] text-[10px] font-heading text-sport-gray-800 font-medium text-center">{club.overall_league_payed}</td>
                                            <td className="px-3 py-[7px] md:text-[16px] text-[10px] font-heading text-sport-gray-800 font-medium text-center">{club.overall_league_W}</td>
                                            <td className="px-3 py-[7px] md:text-[16px] text-[10px] font-heading text-sport-gray-800 font-medium text-center">{club.overall_league_D}</td>
                                            <td className="px-3 py-[7px] md:text-[16px] text-[10px] font-heading text-sport-gray-800 font-medium text-center">{club.overall_league_L}</td>
                                            <td className="px-3 py-[7px] md:text-[16px] text-[10px] font-heading text-sport-gray-800 font-medium text-center">{club.overall_league_PTS}</td>
                                            <td className="px-3 py-[7px] md:text-[16px] text-[10px] font-heading text-sport-gray-800 font-medium text-center">{club.home_league_W}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoSection;

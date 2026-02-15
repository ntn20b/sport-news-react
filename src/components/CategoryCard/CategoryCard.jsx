import { Link } from "react-router-dom";

export default function CategoryCard({ category, index }) {
    const isEven = category.id % 2 === 0;

    return (
        <Link to={`/category/${category.slug}`}>
            <div className={`flex ${isEven ? "flex-col-reverse" : "flex-col"} gap-[30px] h-full justify-between transition-all hover:opacity-80`}>
                <div className="bg-[#EBEEF3] rounded-[6px] md:px-5 px-3 md:py-5 py-3 h-full flex justify-center items-center">
                    <p className="lg:text-[37px] md:text-[30px] text-[20px] font-black md:leading-[1.07] text-center uppercase bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent">
                        {category.name}
                    </p>
                </div>
                <img
                    src={category.image}
                    alt={category.name}
                    className={`rounded-[6px] object-cover ${index === 0 ? "max-h-[288px]" : ""} ${index === 1 ? "max-h-[235px]" : ""} ${index === 2 ? "max-h-[288px]" : ""} ${index === 3 ? "max-h-[286px]" : ""}`}
                />
            </div>
        </Link>
    );
}

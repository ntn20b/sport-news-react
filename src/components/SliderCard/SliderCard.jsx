function SliderCard({ category, date, title, description, image }) {
    return (
        <div
            className="md:px-12 px-4 md:py-11 py-5 flex flex-col justify-between sm:aspect-[16/7] aspect-[4/4] gap-8 rounded-t-[6px] w-full"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <p className="label label-lg max-w-[107px] w-full h-[36px]">{category}</p>

            <div>
                <p className="text-[18px] text-white">{date}</p>

                <h3 className="font-heading font-bold md:text-[36px] text-[28px] text-white leading-[1.2] mt-[10px] uppercase max-w-[760px] w-full">{title}</h3>

                <p className="md:text-[20px] text-[18px] leading-[1.4] text-white font-medium md:mt-7 mt-3 max-w-[700px] w-full">{description}</p>
            </div>
        </div>
    );
}

export default SliderCard;

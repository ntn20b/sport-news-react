import { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "../../SliderCard/SliderCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import sliderBg from "../../../assets/sliderbg.webp";

const slides = [
    { id: 1, category: "Football", date: "04 June 2023", title: "Lionel Messi Leaving PSG", description: "Top scorer in EuroLeague Finals.", image: sliderBg },
    { id: 2, category: "Basketball", date: "05 June 2023", title: "NBA Finals Game 7 Ends Dramatic", description: "Historic performance in NBA finals.", image: sliderBg },
    { id: 3, category: "Tennis", date: "06 June 2023", title: "Djokovic Wins Another Grand Slam", description: "The Serbian star continues dominance.", image: sliderBg },
    { id: 4, category: "Tennis", date: "06 June 2023", title: "Djokovic Wins Another Grand Slam", description: "The Serbian star continues dominance.", image: sliderBg },
    { id: 5, category: "Tennis", date: "06 June 2023", title: "Djokovic Wins Another Grand Slam", description: "The Serbian star continues dominance.", image: sliderBg },
    { id: 6, category: "Tennis", date: "06 June 2023", title: "Djokovic Wins Another Grand Slam", description: "The Serbian star continues dominance.", image: sliderBg },
];

function SliderSection() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const visibleSlides = 4;

    const start = Math.max(0, Math.min(activeIndex, slides.length - visibleSlides));
    const visiblePagination = slides.slice(start, start + visibleSlides);

    const isFirstSlide = activeIndex === 0;
    const isLastSlide = activeIndex === slides.length - 1;

    return (
        <section className="md:mt-20 mt-15">
            <div className="w-full max-w-[1170px] mx-auto xl:px-0 px-4">
                <Swiper slidesPerView={1} spaceBetween={50} onSwiper={(swiper) => (swiperRef.current = swiper)} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <SliderCard {...slide} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* navigation & pagination */}
                <div className="w-full bg-sport-gray-100 px-6 py-5 rounded-b-[6px]">
                    <div className="flex items-center md:justify-end justify-center md:gap-[43px] gap-7">
                        <button
                            onClick={() => swiperRef.current.slidePrev()}
                            className={`md:w-[75px] w-[40px] md:h-[50px] h-[30px] flex items-center justify-center  text-white rounded ${!isFirstSlide ? "bg-sport-gray-800" : "bg-[#BAB8B8]"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="15" viewBox="0 0 27 15" fill="none">
                                <path
                                    d="M25.0781 8.36401C25.6304 8.36401 26.0781 7.9163 26.0781 7.36401C26.0781 6.81173 25.6304 6.36401 25.0781 6.36401L25.0781 8.36401ZM0.291738 6.65691C-0.0987854 7.04743 -0.0987854 7.6806 0.291739 8.07112L6.6557 14.4351C7.04623 14.8256 7.67939 14.8256 8.06991 14.4351C8.46044 14.0446 8.46044 13.4114 8.06991 13.0209L2.41306 7.36402L8.06991 1.70716C8.46044 1.31664 8.46044 0.683472 8.06991 0.292947C7.67939 -0.097577 7.04622 -0.0975769 6.6557 0.292947L0.291738 6.65691ZM25.0781 6.36401L0.998846 6.36402L0.998846 8.36402L25.0781 8.36401L25.0781 6.36401Z"
                                    fill="#EBEEF3"
                                />
                            </svg>
                        </button>

                        {visiblePagination.map((_, i) => {
                            const index = start + i;
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={index}
                                    onClick={() => swiperRef.current.slideTo(index)}
                                    className={`md:w-[35px] w-[20px] md:h-[35px] h-[20px] md:text-[24px] text-[18px] font-medium rounded-[100px] ${isActive ? "bg-sport-gray-800 text-white" : ""}`}>
                                    {index + 1}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => swiperRef.current.slideNext()}
                            className={`md:w-[75px] w-[40px] md:h-[50px] h-[30px] flex items-center justify-center  text-white rounded ${!isLastSlide ? "bg-sport-gray-800" : "bg-[#BAB8B8]"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="15" viewBox="0 0 27 15" fill="none">
                                <path
                                    d="M1 6.36401C0.447715 6.36401 0 6.81173 0 7.36401C0 7.9163 0.447715 8.36401 1 8.36401V6.36401ZM25.7864 8.07112C26.1769 7.6806 26.1769 7.04743 25.7864 6.65691L19.4224 0.292946C19.0319 -0.0975785 18.3987 -0.0975785 18.0082 0.292946C17.6177 0.68347 17.6177 1.31664 18.0082 1.70716L23.6651 7.36401L18.0082 13.0209C17.6177 13.4114 17.6177 14.0446 18.0082 14.4351C18.3987 14.8256 19.0319 14.8256 19.4224 14.4351L25.7864 8.07112ZM1 8.36401L25.0793 8.36401V6.36401L1 6.36401V8.36401Z"
                                    fill="#EBEEF3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SliderSection;

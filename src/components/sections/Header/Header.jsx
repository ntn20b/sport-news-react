import { useState, useEffect } from "react";
import logo from "../../../assets/logo-sport-news.svg";
import nav from "../../../assets/nav.svg";
import "./Header.css";

function Header() {
    // Creating a state for opening the menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Switch function (analogous to burgerButton listener)
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Effect for blocking scrolling (analogous to toggleBodyLock)
    useEffect(() => {
        if (isMenuOpen) {
            document.documentElement.classList.add("menu-open");
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.classList.remove("menu-open");
            document.body.style.overflow = "";
        }
    }, [isMenuOpen]);

    return (
        <header className="w-full mx-auto max-w-[1170px] flex pt-[23px] pb-[27px] xl:px-0 px-4 justify-between items-center">
            <a href="#" className="z-[2] relative">
                <img src={logo} alt="logo" />
            </a>

            <nav>
                <ul className="menu-list menu-desktop">
                    <li className="menu-item active">
                        <a href="#" className="active">
                            Home
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Category</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Trending News</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Recent News</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Clubs Ranking</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Sports Article</a>
                    </li>
                </ul>
            </nav>

            <div className={`xl:hidden mobile-menu ${isMenuOpen ? "menu-active" : ""}`}>
                <nav>
                    <ul className="menu-list menu-mobile">
                        <li className="menu-item active">
                            <a href="#" className="active">
                                Home
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Category</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Trending News</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Recent News</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Clubs Ranking</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Sports Article</a>
                        </li>
                    </ul>

                    <button className="mt-10 gap-5 flex gap-[9.5px] items-center justify-center max-w-[100px] max-h-[35px] rounded-[6px] w-full px-[14.5px] bg-sport-gray-300 cursor-pointer hover:opacity-70 transition-all">
                        <img src={nav} alt="nav" />
                        <p className="text-white font-main text-[14px] leading-[3] font-normal">Search</p>
                    </button>
                </nav>
            </div>

            <button className=" xl:flex gap-5 hidden flex gap-[9.5px] items-center justify-center max-w-[100px] max-h-[35px] rounded-[6px] w-full px-[14.5px] bg-sport-gray-300 cursor-pointer hover:opacity-70 transition-all">
                <img src={nav} alt="nav" />
                <p className="text-white font-main text-[14px] leading-[3] font-normal">Search</p>
            </button>

            {/* “Burger” button with click handler */}
            <button onClick={toggleMenu} aria-label="Menu" className={`xl:hidden relative z-[2] w-8 h-6 flex flex-col justify-between group ${isMenuOpen ? "active" : ""}`}>
                <span className="burger-line top"></span>
                <span className="burger-line middle"></span>
                <span className="burger-line bottom"></span>
            </button>
        </header>
    );
}

export default Header;

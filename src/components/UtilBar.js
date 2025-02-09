import React, { useState } from "react";

import arrow from '../assets/icons/arrow.svg';
import darkMode from '../assets/icons/darkMode.svg';
import lightMode from '../assets/icons/lightMode.svg';

export default function UtilsBar() {
    const [scroll, setScroll] = useState(window.scrollY);
    const [theme, setTheme] = useState(darkMode);
    const [alt, setAlt] = useState("Dark mode icon");

    window.addEventListener('scroll', () => {
        setScroll(window.scrollY);
    });

    const toggleTheme = (e) => {
        const x = document.documentElement;

        e.target.style.transition = "transform 0.3s ease-in-out";
        e.target.style.transform = "rotate(270deg)";

        setTimeout(() => {
            if (x.classList.contains("dark")) {
                x.classList.remove("dark");
                localStorage.setItem("theme", "light");
                setTheme(darkMode);
                setAlt("Dark mode icon");
            } else {
                x.classList.add("dark");
                localStorage.setItem("theme", "dark");
                setTheme(lightMode);
                setAlt("Light mode icon");
            };
            e.target.style.transform = "rotate(0deg)";
        }, 300);
    };

    const backToTop = () => {
        window.scrollTo({top: 0, behavior: "auto"});
    };

    return (
        <div className="fixed right-5 bottom-5 flex flex-row gap-5 items-center">
            <button
                className="h-12 w-12 p-3 rounded-full bg-darkGreen1 dark:bg-lightGreen1 hover:bg-darkGreen2 dark:hover:bg-lightGreen2 hover:shadow-[rgba(0,0,0,0.5)_0px_0px_25px_0px] dark:hover:shadow-[rgba(0,0,0,1)_0px_0px_25px_0px] !transition-all !duration-500"
                onClick={toggleTheme}>
                <img
                    className=""
                    src={theme}
                    alt={alt}
                />
            </button>

            { scroll > 700 ? (
                <button
                    className="h-20 w-20 p-5 rounded-full bg-darkGreen1 dark:bg-lightGreen1 hover:bg-darkGreen2 dark:hover:bg-lightGreen2 hover:shadow-[rgba(0,0,0,0.5)_0px_0px_25px_0px] dark:hover:shadow-[rgba(0,0,0,1)_0px_0px_40px_0px] transition-all duration-500"
                    onClick={backToTop}>
                    <img
                        className=""
                        src={arrow}
                        alt="Arrow pointing up"
                    />
                </button>
            ) : (
                <></>
            )}
        </div>
    );
};
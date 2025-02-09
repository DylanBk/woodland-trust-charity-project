import React from "react";

import bg from '../assets/images/background.webp';

export default function Hero() {
    return (
        <div>
            <img
                className="h-screen w-full object-cover overflow-hidden"
                src={bg}
                alt="A branch coated with a thick layer of moss"
            />
            <div className="h-screen w-full absolute top-0 bg-gradient-to-b from-black from-10% to-transparent to-100% opacity-80"></div>

            <div className="w-5/6 sm:w-3/5 lg:w-max absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center px-10 py-5 rounded-lg bg-black bg-opacity-30 backdrop-blur-[3px] text-white text-center">
                <h1 className="leading-none">The Woodland Trust</h1>
                <h2 className="mt-2 sm:-mt-2 text-xl sm:text-3xl font-merriweather-sans !text-white">The leading woodland conservation group</h2>
                <a
                    className="px-10 py-2 border border-white rounded-lg mt-16 sm:mt-8 bg-white bg-opacity-20 text-3xl text-nowrap hover:px-14 sm:hover:px-20 hover:bg-opacity-0 transition-all duration-300"
                    href="https://www.woodlandtrust.org.uk/"
                    rel="noreferrer"
                    target="_blank">
                    Get Involved
                </a>
            </div>
        </div>
    );
};
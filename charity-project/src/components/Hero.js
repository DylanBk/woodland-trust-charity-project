import React from "react";

import bg from '../assets/images/hero.png';

export default function Hero() {
    return (
        <div>
            <img
                className="h-screen w-full object-cover overflow-hidden"
                src={bg}
                alt="A forest with rays of light coming through the canopy"
            />

            <div className="w-1/4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center px-10 py-5 rounded-lg bg-black bg-opacity-30 backdrop-blur-[3px] text-white text-center">
                <h1>The Woodland Trust</h1>
                <h2 className="-mt-2 text-3xl font-merriweather-sans">The leading woodland conservation group</h2>
                <a
                    className="px-10 py-2 border border-white rounded-lg mt-8 bg-white bg-opacity-20 text-3xl hover:px-20 hover:bg-opacity-0 transition-all duration-300"
                    href="https://www.woodlandtrust.org.uk/"
                    rel="noreferrer"
                    target="_blank">
                    Get Involved
                </a>
            </div>
        </div>
    );
};
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "bgLight": "#FEFEFE",
                "bgDark": "#222222",
                "darkGreen1": "#055516",
                "darkGreen2": "#044412",
                "lightGreen1": "#367644",
                "lightGreen2": "#2B5E36",
            },
        },
    },
    plugins: [],
};
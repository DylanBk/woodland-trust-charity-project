/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "bgLight": "#FEFEFE",
                "bgDark": "#222222",
                "darkGreen": "#055516",
                "lightGreen": "#367644"
            },
        },
    },
    plugins: [],
};
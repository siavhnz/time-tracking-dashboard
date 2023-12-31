/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sxl: "1156px",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        blue: "hsl(246, 80%, 60%)",
        "light-orange": "hsl(15, 100%, 70%)", // work
        "soft-blue": "hsl(195, 74%, 62%)", // play
        "light-red": "hsl(348, 100%, 68%)", // study
        "lime-green": "hsl(145, 58%, 55%)", // exercise
        violet: "hsl(264, 64%, 52%)", // social
        "soft-yellow": "hsl(43, 84%, 65%)", // self care
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
      backgroundImage: {
        work: "url('./assets/images/icon-work.svg')",
        play: "url('./assets/images/icon-play.svg')",
        study: "url('./assets/images/icon-study.svg')",
        exercise: "url('./assets/images/icon-exercise.svg')",
        social: "url('./assets/images/icon-social.svg')",
        "self-care": "url('./assets/images/icon-self-care.svg')",
      },
    },
  },
  plugins: [],
};

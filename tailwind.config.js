/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "gradient-text": "linear-gradient(to bottom, #f08024, #f01a0e)",
        "gradient-bg": "linear-gradient(to right, #f08024, #f01a0e)",
      },
      fontFamily: {
        magistral: ["var(--font-magistral)"],
        roboto: ["var(--font-roboto)"],
        magistraal: ["var(--font-magistraal)"],
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "36px",
        "4xxl": "40px",
        "5xl": "48px",
        "6xl": "64px",
      },
      colors: {
        lightorange: "#FF7000",
        darkorange: "#BB1824",
        bgblue: "#002D62",
        headingblue: "#002D62",
        outlaws: "#043274",
        hawks: "#0909A4",
        bggray: "#e1e1e5",
        textInput: "#d0d0d0",
        bgNews: "#EEEEEE",
        bgdark: "#101926",
        "bg-dark2": "#171f2c",
        lightgray: "#D9D9D9",
        gray: "#4E4E4E",
        formtext: "#3F5065",
        formbg: "#E4E7E9",
        googlebg: "#222232",
        underlinegray: "#717679",
        selectblue: "#1878B9",
        lightNews: "#FAFAFA",
        variantsbg: "#F0F0F0",
      },
    },
  },
  plugins: [],
};

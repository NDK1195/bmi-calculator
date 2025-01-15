/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#345FF6",
        gunmetal: "#253347",
        "dark-electric-blue": "#5E6E85",
      },
      boxShadow: {
        box: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};

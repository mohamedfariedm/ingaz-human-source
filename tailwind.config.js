/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rocket: "rocket 0.5s ease-in-out forwards",
        "rocket-reverse": "rocket-reverse 0.5s ease-in-out forwards",
      },
      keyframes: {
        rocket: {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "50%": { transform: "translate(-15px, -15px)", opacity: "0" },
          "75%": { transform: "translate(15px, 15px)", opacity: "0" },
          "100%": { transform: "translate(0, 0)", opacity: "1" },
        },
        "rocket-reverse": {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "50%": { transform: "translate(15px, 15px)", opacity: "0" },
          "75%": { transform: "translate(-15px, -15px)", opacity: "0" },
          "100%": { transform: "translate(0, 0)", opacity: "1" },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#0E4A79", // Default primary color
          light: "#60A5FA",  // Lighter shade
          dark: "#1E3A8A",   // Darker shade
        },
      },
      spacing: {
        'dynamic-height': 'calc(100px*(100vw/1440))',
        'dynamic-padding': 'calc(18px*(100vw/1440))',
        'dynamic-gap': 'calc(120px*(100vw/1440))',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors:{
        "primary-color" : "rgba(var(--primary-color))",
        "secondary-color" : "rgba(var(--secondary-color))",
        "bg-color" : "rgba(var(--bg-color))",
        "bar-color" : "rgba(var(--bar-color))",
      }
    },
  },

  plugins: [],
};

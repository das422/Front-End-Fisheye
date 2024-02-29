import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    },
    colors: {
      'tblue': '#3B4D60',
      'grad': 'linear-gradient(to right, #3B4D60 0%, #273444 100%)',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'tgreen': '#91A791',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Archivo', 'sans-serif'],

    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }, // Add closing brace here
  },
  plugins: [],
};
export default config;

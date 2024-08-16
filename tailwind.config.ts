import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ferngreen': {
          '50': '#f4faf3',
          '100': '#e6f4e4',
          '200': '#cce9c9',
          '300': '#a2d69f',
          '400': '#72bb6d',
          '500': '#4e9e49',
          '600': '#3b8237',
          '700': '#367133',
          '800': '#2b5229',
          '900': '#244423',
          '950': '#0f240f',
      },
      
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;

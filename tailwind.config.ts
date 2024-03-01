import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      'primary-purple':'#8556AA',
      'primary-black': '#3D3D3D',
      'secondary-black': '#303030',
      'text-color': '#6A6A6A',
      'primary-grey': '#919191',
      'secondary-grey': '#919191',
      'checkbox-purple': '#7E50CE'
    },
  },
  plugins: [],
};
export default config;

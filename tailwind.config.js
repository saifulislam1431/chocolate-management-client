/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f48b7f",
        
"secondary": "#efcd9e",
        
"accent": "#67e224",
        
"neutral": "#1D222A",
        
"base-100": "#FCFCFD",
        
"info": "#2467DB",
        
"success": "#16A296",
        
"warning": "#ECAB55",
        
"error": "#EB5342",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


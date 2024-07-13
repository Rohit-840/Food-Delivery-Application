/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
      },
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities ={
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
}


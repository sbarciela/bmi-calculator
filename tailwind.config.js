/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
 "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./assets/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    important:"#elipse",
    extend: {
      colors: {
        'blue': '#345FF6',
        'gunmetal': '#253347',
        'darkelectric': '#5E6E85',
        'borders': '#D8E2E7',
        'white': '#FFFFFF',
        'yellow': '#ffc82c',
        'lightblue':'#D6E6FE',
        'lightblue2':'#d6fcfe 0%',
        'background':'#B3D3F1',
        'grad01':  'rgba(52, 95, 246, 1)',
        'grad02': 'rgba(88, 125, 255, 1)',
        'backphoto':'#E7F5FE',
        'pink': 'rgba(242, 30, 132, 0.15)',
        'orange':'rgba(246, 145, 52, 0.15)',
        'bluemoon':'rgba(34, 193, 193, 0.15)',
        'inactiveRadio':'#D8E2E7'
      },

    },
  fontSize: {
      s: ['14px', '150%'],
      m: ['16px', '24px'],
      hs: ['20px', '110%'],
      hm: ['24px', '110%'],
      hl: ['48px', '110%'],
      hxl: ['64px', '110%'],
      icon:['32px', '100%'],
      iconmain:['40px', '100%']
    },
    dropShadow: {
      '3xl': '16px 32px 56px 0px rgba(143, 174, 207, 0.25)',
    
    },
    scale: {
      '-1': '-1'
    }
  },
  plugins: [],
}


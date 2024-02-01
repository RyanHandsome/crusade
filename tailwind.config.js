/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'ssm': '494px',
        'xmd': '941px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mage': 'url("/MAGE.SVG")'
      },
      colors: {
        'white': "#FFFFFF",
        'yellow': '#D18236',
        'violet': '#AD27D0',
        'pink': '#FF2EE2',
        'dark': '#000000'
      },
      fontFamily: {
        'bodoni-condensed': ["var(--font-bodoni-condensed)"],
        'band-gothic': ['var(--font-band-gothic)'],
        'lora': ['var(--font-lora)']
      }
    },
  },
  plugins: [],
}

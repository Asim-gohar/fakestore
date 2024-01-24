import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'bgImage' : "@/public/images/cover.jpeg"
      },
      colors : {
        '92bcfb' : '#92bcfb' ,
        'a186b1' : '#a186b1' ,
        '6f6da0' : '#6f6da0' ,
        'e93a7e' : '#e93a7e'
      }
      
    },
  },
  plugins: [],
}
export default config

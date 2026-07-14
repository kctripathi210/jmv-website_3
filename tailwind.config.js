/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'jmv-navy':   '#0B132B',
        'jmv-slate':  '#1C2541',
        'jmv-crimson':'#C8102E',
        'jmv-text':   '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      transitionDuration: {
        '400': '400ms',
      },
      opacity: {
        '6':  '0.06',
        '8':  '0.08',
        '12': '0.12',
      },
    },
  },
  plugins: [],
};

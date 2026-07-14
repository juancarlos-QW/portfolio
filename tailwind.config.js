/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        base: '#05070e',
        surface: '#0b1121',
        line: 'rgba(148, 163, 184, 0.12)',
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(59, 130, 246, 0.55)',
        'glow-sm': '0 0 30px -10px rgba(59, 130, 246, 0.6)',
        card: '0 20px 50px -30px rgba(0, 0, 0, 0.9)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'fade-down': 'fade-down 0.25s ease-out',
      },
    },
  },
  plugins: [],
};

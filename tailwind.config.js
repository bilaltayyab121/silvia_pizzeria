export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'italian-red': '#b91c1c',
        'italian-green': '#15803d',
        'italian-cream': '#fef9e8',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

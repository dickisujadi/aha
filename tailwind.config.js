/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': {'max': '375px'},
      // => @media (max-width: 375px) { ... }

      'sm': {'min': '376px', 'max': '767px'},
      // => @media (min-width: 376px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1439px'},
      // => @media (min-width: 1280px and max-width: 1439px) { ... }

      '2xl': {'min': '1440px'},
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}

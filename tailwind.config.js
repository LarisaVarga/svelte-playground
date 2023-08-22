/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', 'node_modules/preline/dist/*.js',
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      height: {
        '1px': '1px',
        '108': '27rem',
        '100': '25rem',
        "bottom-card": 'calc( 100% - 15rem )',
      },
      inset: {
        '5px': '5px',
      },
      margin: {
        '2px': '2px',
        '3px': '3px',
      },
      colors: {
        // flowbite-svelte
        primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B' },
      },
    }
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin'),
    require("daisyui"),
  ],
  darkMode: 'class',
};
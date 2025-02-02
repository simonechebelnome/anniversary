import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [daisyui],
  //   theme: {
  //     extend: {
  //       textColor: ({ theme }) => ({
  //         "gray-light": theme("colors.gray.400"),
  //         gray: theme("colors.gray.500"),
  //         "gray-dark": theme("colors.gray.600"),
  //       }),
  //       boxShadow: {
  //         up3xl: " -8px 4px 147px -34px rgba(0,0,0,0.25)",
  //       },
  //     },
  //   },
  //   daisyui: {
  //     themes: [
  //       {
  //         // Overrides the default theme with a custom one
  //         platformTheme: {
  //           ...require('daisyui/src/theming/themes')['light'],
  //           primary: '#0066CC',
  //           'primary-content': '#ffffff',
  //           secondary: '#4DB6AC',
  //           accent: '#FF6B6B',

  //           '--rounded-box': '1rem',
  //           '--rounded-btn': '.7rem',
  //           '--rounded-badge': '2rem',

  //           '--animation-btn': '.35s',
  //           '--animation-input': '.2s',

  //           '--btn-text-case': 'uppercase',
  //           '--border-btn': '1px',
  //         },
  //       },
  //     ],
  //   },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        accent:"#0989FF",
        topHeadingPrimary:"#010f1c",
        topHeadingSecondary:"#021d35",
        pink:"#FD4B6B",
      },
    },
  },
  plugins: [],
}
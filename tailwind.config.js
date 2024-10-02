/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(252, 89%, 63%)',
          hover: 'hsl(252, 89%, 73%)',
          accent: 'hsl(240, 14%, 97%)',
          text: 'hsl(0, 0%, 1%)',
          secondary: {
            DEFAULT: 'hsl(0, 0%, 11%)',
            hover: 'hsl(0, 0%, 21%)',
          },
          background: 'hsl(240, 5%, 95%)',
        },
      }
    }
  },
  plugins: [],
}


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
          DEFAULT: 'var(--primary-hsl)', 
          hover: 'var(--primary-hover-hsl)', 
        },
        accent: 'var(--accent-hsl)',
        text: 'var(--text-hsl)', 
        secondary: {
          DEFAULT: 'var(--secondary-hsl)',
          hover: 'var(--secondary-hover-hsl)',
        },
        background: 'var(--background-hsl)',
      },
    },
  },
  plugins: [],
}


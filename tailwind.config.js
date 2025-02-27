/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        // secondary: "var(--secondary-color)",
        // tertiary: "var(--tertiary-color)",
        // formColor: "var(--form-color)",
        // bgColor: "var(--background-color)",
        // errColor: "var(--error-color)",
        // truthColor: "var(--truth-color)",
        // warnColor: "var(--warning-color)",
        // textColor: "var(--text-color)",
        // errorTextColor: "var(--error-text-color)",
        // logoColor: "var(--logo-color)",
        // tableColor: "var(--table-color)",
        // hyperlinkColor: "var(--hyperlink-color)",
        // breadcrumbColor: "var(--breadcrumb-color)",
      },
      fontFamily: {
        'main': ['Mouse Memoirs', 'sans-serif'],
        'body': ['Oswald', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'fade-in-up': 'fadeInUp 1s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}


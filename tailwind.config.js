/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./**/*.{js,json,liquid}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'heading': 'var(--font-heading-family)'
        },
      },
    },
    plugins: [],
  }
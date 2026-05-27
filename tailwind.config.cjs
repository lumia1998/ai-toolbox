/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './web/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: 'var(--color-bg-container)',
        elevated: 'var(--color-bg-elevated)',
        muted: 'var(--color-bg-hover)',
        border: 'var(--color-border)',
        primary: 'var(--ant-color-primary)',
      },
      borderRadius: {
        glass: '18px',
      },
      boxShadow: {
        glass: '0 18px 50px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};

import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,vue,ts,tsx}"
  ],
  theme: {
    extend: {
      // Colores via CSS variables (canal RGB + alpha)
      colors: {
        bg:      "rgb(var(--bg) / <alpha-value>)",
        fg:      "rgb(var(--fg) / <alpha-value>)",
        muted:   "rgb(var(--muted) / <alpha-value>)",
        card:    "rgb(var(--card) / <alpha-value>)",
        border:  "rgb(var(--border) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",   // #5e17eb → 94 23 235
        indigo:  "rgb(var(--indigo) / <alpha-value>)",    // #1800ad → 24 0 173
        orchid:  "rgb(var(--orchid) / <alpha-value>)",    // #cb6ce6 → 203 108 230
        violet:  "rgb(var(--violet) / <alpha-value>)",    // #8c52ff → 140 82 255
        pink:    "rgb(var(--pink) / <alpha-value>)",      // #ffa9f9 → 255 169 249
        magenta: "rgb(var(--magenta) / <alpha-value>)",   // #bc3fde → 188 63 222
        blush:   "rgb(var(--blush) / <alpha-value>)",     // #ffc2e8 → 255 194 232
        blue:    "rgb(var(--blue) / <alpha-value>)",      // #1f80ff → 31 128 255
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgb(0 0 0 / 0.35)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    },
  },
  plugins: [typography()],
  darkMode: 'class'
};

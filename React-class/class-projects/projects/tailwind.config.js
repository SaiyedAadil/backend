/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryCyan: '#ACC9FF',
        primaryCyanLight: '#F7F7F7',
        neutral100: 'hsl(183, 100%, 15%)',
        neutral200: 'hsl(186, 14%, 43%)',
        neutral300: 'hsl(184, 14%, 56%)',
        neutral400: 'hsl(185, 41%, 84%)',
        neutral500: 'hsl(189, 41%, 94%)',
        neutral600: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        base: ['"Space Mono"', 'monospace'],
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        // Continue defining as needed...
        24: '96px',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
      },
      fontSize: {
        50: '12px',
        100: '14px',
        200: '16px',
        300: '18px',
        400: '20px',
        500: '24px',
        600: '28px',
        700: '32px',
        800: '36px',
        900: '44px',
        950: '64px',
      },
    },
  },
  plugins: [],
}


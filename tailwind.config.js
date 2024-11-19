/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Shades of Black and Gray
        black: {
          DEFAULT: '#000000',
          light: '#707070', // Dark gray
          medium: '#878787', // Medium gray
          lightest: '#CBC8D4', // Lightest gray
        },
        gray: {
          DEFAULT: '#EDEDED', // Soft gray
          lightest: '#F6F6F6', // Very light gray
        },

        // Primary and Accent Colors
        primary: {
          DEFAULT: '#072635', // Dark navy
          lighter: '#0C3D5D', // Slightly lighter navy
          lightest: '#084C77', // Light navy
        },
        accent: {
          DEFAULT: '#705AAA', // Purple
          bright: '#01F0D0', // Bright aqua
          muted: '#D8FCF7', // Light aqua
        },

        // Greens
        green: {
          DEFAULT: '#0BD984', // Bright green
        },

        // Blues
        blue: {
          DEFAULT: '#055A92', // Dark blue
          darker: '#006AAC', // Medium blue
          brightest: '#007BC7', // Light blue
        },

        // Utility and Highlight Colors
        white: '#FFFFFF',
        background: '#F6F7F8',
        highlight: '#FF6200', // Orange for highlights or alerts
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
        'extra-bold': '800',
      },
      fontSize: {
        14: '14px',
        18: '18px',
        24: '24px',
      },
      lineHeight: {
        19: '19px',
        24: '24px',
        33: '33px',
      },
      letterSpacing: {
        0: '0px',
      },
      textTransform: {
        titlecase: 'capitalize',
      },
    },
  },
  plugins: [],
};

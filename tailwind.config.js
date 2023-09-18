module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    customForms: (theme) => ({
      default: {
        checkbox: {
          '&:focus': {
            borderColor: undefined,
          },
        },
      },
    }),
    extend: {
      scale: {
        102: '1.02',
      },
      colors: {
        primary: {
          DEFAULT: '#01143D',
        },
        csgreen: {
          DEFAULT: '#61CE70',
        },
        csred: {
          DEFAULT: '#E93F3A',
        },
        csblack: {
          DEFAULT: '#202020',
        },
        csgrey: {
          DEFAULT: '#F8FAFB',
        },
        csfooter: {
          DEFAULT: '#F8FAFB',
        },
        secondary: {
          DEFAULT: '#0756FB',
        },
        cookie: {
          DEFAULT: '#F3A733',
        },
      },
      fontFamily: {
        circular: ['"Circular STD"'],
        filson: ['"Filson Soft"'],
        quicksand: ['var(--font-quicksand)'],
      },
      width: {
        98: '25rem',
        100: '32rem',
        848: '53rem',
        22: '5.59rem',
        360: '360px',
      },
      fontSize: {
        '1xs': '.75rem',
      },
      height: {
        98: '33rem',
        99: '32rem',
        100: '57rem',
        110: '65 rem',
        640: '40rem',
        550: '35rem',
        500: '32rem',
      },
      boxShadow: {
        '3xl': '0px 0px 10px 0px rgb(0 0 0 / 50%)',
      },
      maxWidth: {
        xxs: '6rem',
      },
      gridTemplateColumns: {
        16: 'repeat(auto-fit, minmax(10.9rem, 1fr))',
        18: 'repeat(auto-fit, minmax(23rem, 1fr))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              fontWeight: 300,
            },
            a: {
              cursor: 'pointer',
              textDecoration: 'none',
              color: '#0756FB',
            },
            figcaption: {
              textAlign: 'center',
            },
            li: {
              fontWeight: 300,
            },
            h3: {
              fontWeight: 700
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};

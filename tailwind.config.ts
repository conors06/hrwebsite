import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'
import typographyStyles from './typography'

const colors = require('tailwindcss/colors')
const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme('colors'))
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    )

    addBase({
        ':root': newVars,
    })
}

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],

    darkMode: 'selector',
    plugins: [
        addVariablesForColors,
        typographyPlugin,
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
    theme: {
        extend: {
            animation: {
                "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
              },
              keyframes: {
                "border-beam": {
                  "100%": {
                    "offset-distance": "100%",
                  },
                },
              },
            colors: {
                cv: '#c989cc',
            },
            height: {
                secondFigureFit: '32.5rem',
                thirdFigureFit: '26.75rem',
                fourthFigureFit: '34.65rem',
            },
            maxWidth: {
                '7.5xl': '86rem', // Add your desired value here, e.g., '90rem' for 1440px
            },
        },
        fontSize: {
            xs: ['0.8125rem', { lineHeight: '1.5rem' }],
            sm: ['0.875rem', { lineHeight: '1.5rem' }],
            base: ['1rem', { lineHeight: '1.75rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '2rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '4xl': ['2rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '3.5rem' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['8rem', { lineHeight: '1' }],
        },
        typography: typographyStyles,
    },
} satisfies Config

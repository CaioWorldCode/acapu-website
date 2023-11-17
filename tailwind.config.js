/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')

export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx, html}',
        './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx, html}',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
                default: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#1b1f2e',
                    1000: '#181B1F',
                    dark: '#0b1019',
                    base: '#838694',
                },

                main: {
                    50: '#FEFCE8',
                    100: '#FDF9C3',
                    200: '#FBF594',
                    300: '#FCE96A',
                    400: '#F9DA3A',
                    500: '#F7D24F',
                    600: '#F2C637',
                    700: '#EFAF24',
                    800: '#E49815',
                    900: '#D67D10',
                    1000: '#D17711',
                    dark: '#7A5E09',
                },
            },
        },
    },
    plugins: [],
}

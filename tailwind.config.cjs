/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{html,js,vue}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            fontSize: {
                xxs: '.60rem',
                xs: '.7rem',
                sm: '.825rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
                '7xl': '5rem',
            },
            colors: {
                primary: '#3db2ff',
                'primary-50': '#f6fcff',
                'primary-100': '#ECF8FF',
                'primary-200': '#b1e0ff',
                'primary-300': '#8bd1ff',
                'primary-400': '#64c1ff',
                'primary-500': '#3db2ff',
                'primary-600': '#318ecc',
                'primary-700': '#256b99',
                'primary-800': '#184766',
                'primary-900': '#0c2433',

                accent: '#fca547',
                'accent-100': '#feedda',
                'accent-200': '#fedbb5',
                'accent-300': '#fdc991',
                'accent-400': '#fdb76c',
                'accent-500': '#fca547',
                'accent-600': '#ca8439',
                'accent-700': '#97632b',
                'accent-800': '#65421c',
                'accent-900': '#32210e',

                black: '#1C1C1E',
                'black-800': '#3a3a3c',
                'black-700': '#48484a',
                'black-600': '#8e8e93',
                'black-500': '#c7c7cc',
                'black-400': '#d1d1d6',
                'black-300': '#e5e5ea',
                'black-200': '#efeff4',

                error: '#D63619',
            },
        },
    },
    plugins: [],
};

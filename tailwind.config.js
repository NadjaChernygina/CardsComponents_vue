/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
            sans: ['"Spot Mono"', 'monospace'],
              
            },
            spacing: {
                18: '4.5rem',
                88: '22rem',
            },
        },
    },
}

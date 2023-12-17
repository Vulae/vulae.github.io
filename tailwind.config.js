/** @type {import('tailwindcss').Config} */
export default {
    content: [ './src/**/*.{html,js,svelte,ts}' ],
    theme: {
        extend: {
            fontFamily: {
                caveat: 'Caveat',
                segoe: [ 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif' ]
            },
            dropShadow: {
                outset: '5px 3px 2px black'
            }
        },
    },
    plugins: [],
}
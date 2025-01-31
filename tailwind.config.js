/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend:{
        colors: {
        mainyellow: '#F7BD22',
        secondyellow:'#b78809',
        darkblue:'#0A1445',
      },
      boxShadow: {
        'highlight': ' 0px 0px 5px 0px #0d69a5'
      },
    }
    
    
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/line-clamp')
,require('@tailwindcss/typography')
],
};

module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    screens: {
      'phone': '551px',
      // => @media (min-width: 551px)

      'laptop': '768px',
      // => @media (min-width: 768px)

      'desktop': '992px',
      // => @media (min-width: 992px)
    },
    extend: {
      colors:{
        'primary':'#AA0601',
        'secondary':'#650300',
        'soft-pink':'#FBF2F2',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
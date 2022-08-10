module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding:'13px',
    },

    screens: {
      'phone': '551px',
      // => @media (min-width: 551px)

      'laptop': '768px',
      // => @media (min-width: 768px)

      'desktop': '1292px',
      // => @media (min-width: 1292px)
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
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage:{
         'bgimg': "url('./img/constantBackground.png')",
       },
       spacing:{
         'c-center': '45%',
         'logo-center': '3%',
       }
    },
  },
  plugins: [],
}